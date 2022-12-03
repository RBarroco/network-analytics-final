# network-analytics

## main
 - data lineage in markdown
## data directory contains:
- raw 
    - with data from unr idd in several formats
- processed
    -  csv versions of dataframes.
    - red_new is the common denominator
    - df with all columns, features
    - files with bin (binary) labels were used to test classification models for the two-step process (binary labels are liniarly separable by ML classification models).  this two step process is not shown in deployment
 ## notebooks directory:
 - jupiter notebook with 'clean' version of prior notebooks, has yet to include some eda done by RB
 ## deplo-docker directory:
 - main.py
 - model.py
 - src folder
 - dockerfile
 - requirements file
 - and all files (models and test data for sampling) needed for running model and tests localy with uvicorn and in a Docker container
 
      

