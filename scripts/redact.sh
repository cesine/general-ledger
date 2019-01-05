#!/bin/bash

# https://devsector.wordpress.com/2014/10/05/advanced-git-branch-filtering/#tree-filter
git filter-branch -f --tree-filter '

    find . | while read file
    do

        # Replacing text in files using any regex in perl
        if [ -f "$file" ]
        then
            perl -pi -e "
            s/<img [^>]*>//gi
            " "$file"

            perl -pi -e "
            s/(Example Lab|Example)/Lab/gi
            " "$file"

        fi

    done

' --tag-name-filter cat -- --all
