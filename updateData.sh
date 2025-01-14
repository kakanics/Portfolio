#!/bin/bash

options=("Add Certificate" "Add Project" "View Certificates" "View Projects" "Quit")
selected=0

while true; do
    clear
    echo "Use the arrow keys to navigate and press Enter to select an option:"
    for i in "${!options[@]}"; do
        if [ $i -eq $selected ]; then
            echo -e "\e[32m> ${options[$i]}\e[0m"
        else
            echo "  ${options[$i]}"
        fi
    done

    read -rsn1 input
    case $input in
        $'\x1b')
            read -rsn2 -t 0.1 input
            if [[ $input == "[A" ]]; then
                ((selected--))
                if [ $selected -lt 0 ]; then
                    selected=$((${#options[@]} - 1))
                fi
            elif [[ $input == "[B" ]]; then
                ((selected++))
                if [ $selected -ge ${#options[@]} ]; then
                    selected=0
                fi
            fi
            ;;
        "")
            case ${options[$selected]} in
                "Add Certificate")
                    read -p "Enter title: " title
                    read -p "Enter description: " description
                    read -p "Enter path: " path
                    read -p "Enter URL: " url
                    jq --arg title "$title" --arg description "$description" --arg path "$path" --arg url "$url" \
                        '. += [{"certificateName": $title, "description": $description, "pathToImage": $path, "link": $url}]' \
                        components/certificates.json > components/certificates.tmp && mv components/certificates.tmp components/certificates.json
                    ;;
                "Add Project")
                    read -p "Enter title: " title
                    read -p "Enter description: " description
                    read -p "Enter path: " path
                    read -p "Enter URL: " url
                    jq --arg title "$title" --arg description "$description" --arg path "$path" --arg url "$url" \
                        '. += [{"projectName": $title, "description": $description, "pathToImage": $path, "link": $url}]' \
                        components/projects.json > components/projects.tmp && mv components/projects.tmp components/projects.json
                    ;;
                "View Certificates")
                    selected_cert=0
                    selected_items=()
                    while true; do
                        clear
                        echo "Use the arrow keys to navigate and press Enter to select a certificate:"
                        IFS=$'\n' certificates=($(jq -r '.[] | "\(.certificateName)"' components/certificates.json))
                        
                        for i in "${!certificates[@]}"; do
                            if [[ " ${selected_items[@]} " =~ " $i " ]]; then
                                echo -e "\e[34m> ${certificates[$i]} (selected)\e[0m"
                            elif [ $i -eq $selected_cert ]; then
                                echo -e "\e[32m> ${certificates[$i]}\e[0m"
                            else
                                echo "  ${certificates[$i]}"
                            fi
                        done

                        read -rsn1 input
                        case $input in
                            $'\x1b')
                                read -rsn2 -t 0.1 input
                                if [[ $input == "[A" ]]; then
                                    ((selected_cert--))
                                    if [ $selected_cert -lt 0 ]; then
                                        selected_cert=$((${#certificates[@]} - 1))
                                    fi
                                elif [[ $input == "[B" ]]; then
                                    ((selected_cert++))
                                    if [ $selected_cert -ge ${#certificates[@]} ]; then
                                        selected_cert=0
                                    fi
                                fi
                                ;;
                            "")
                                if [[ ! " ${selected_items[@]} " =~ " $selected_cert " ]]; then
                                    selected_items+=($selected_cert)
                                fi
                                
                                if [ ${#selected_items[@]} -eq 2 ]; then
                                    # Swap positions in the JSON file
                                    jq -r --argjson idx1 "${selected_items[0]}" \
                                        --argjson idx2 "${selected_items[1]}" \
                                        '. |= (.[$idx1] as $tmp | .[$idx1] = .[$idx2] | .[$idx2] = $tmp)' \
                                        components/certificates.json > components/certificates.tmp && \
                                        mv components/certificates.tmp components/certificates.json

                                    selected_items=()
                                fi
                                ;;
                            "d") 
                                read -p $'\e[31m> Are you sure you want to delete '"${certificates[$selected_cert]}"'? (y/n): ' confirm
                                echo -e "\e[0m"
                                if [[ $confirm == [yY] ]]; then
                                    jq "del(.[$selected_cert])" components/certificates.json > components/certificates.tmp && \
                                    mv components/certificates.tmp components/certificates.json
                                    echo "Certificate deleted."
                                    sleep 1
                                fi
                                ;;
                            "q")
                                break
                                ;;
                        esac
                    done
                    read -p "Press Enter to return to the main menu..."
                    ;;

                "View Projects")
                    selected_proj=0
                    selected_items=()
                    while true; do
                        clear
                        echo "Use the arrow keys to navigate and press Enter to select a project:"
                        IFS=$'\n' projects=($(jq -r '.[] | "\(.projectName)"' components/projects.json))
                        
                        for i in "${!projects[@]}"; do
                            if [[ " ${selected_items[@]} " =~ " $i " ]]; then
                                echo -e "\e[34m> ${projects[$i]} (selected)\e[0m"
                            elif [ $i -eq $selected_proj ]; then
                                echo -e "\e[32m> ${projects[$i]}\e[0m"
                            else
                                echo "  ${projects[$i]}"
                            fi
                        done

                        read -rsn1 input
                        case $input in
                            $'\x1b')
                                read -rsn2 -t 0.1 input
                                if [[ $input == "[A" ]]; then
                                    ((selected_proj--))
                                    if [ $selected_proj -lt 0 ]; then
                                        selected_proj=$((${#projects[@]} - 1))
                                    fi
                                elif [[ $input == "[B" ]]; then
                                    ((selected_proj++))
                                    if [ $selected_proj -ge ${#projects[@]} ]; then
                                        selected_proj=0
                                    fi
                                fi
                                ;;
                            "")
                                if [[ ! " ${selected_items[@]} " =~ " $selected_proj " ]]; then
                                    selected_items+=($selected_proj)
                                fi
                                
                                if [ ${#selected_items[@]} -eq 2 ]; then
                                    # Swap positions in the JSON file
                                    jq -r --argjson idx1 "${selected_items[0]}" \
                                        --argjson idx2 "${selected_items[1]}" \
                                        '. |= (.[$idx1] as $tmp | .[$idx1] = .[$idx2] | .[$idx2] = $tmp)' \
                                        components/projects.json > components/projects.tmp && \
                                        mv components/projects.tmp components/projects.json

                                    selected_items=()
                                fi
                                ;;
                            "d") 
                                read -p $'\e[31m> Are you sure you want to delete '"${projects[$selected_proj]}"' (y/n): ' confirm
                                echo -e "\e[0m"
                                if [[ $confirm == [yY] ]]; then
                                    jq "del(.[$selected_proj])" components/projects.json > components/projects.tmp && \
                                    mv components/projects.tmp components/projects.json
                                    echo "Project deleted."
                                    sleep 1
                                fi
                                ;;
                            "q") 
                                break
                                ;;
                        esac
                    done
                    read -p "Press Enter to return to the main menu..."
                    ;;

                "Quit")
                    break
                    ;;
            esac
            ;;
    esac
done