Capstone_MLE9
==============================

# information about saved datasets:

- red-new-xxx are those datasets that were split from the new reduced dataframe (see below)
the default analysis is done with multi-labels (including 5 types of network attack and a normal state of no attack)

- there is a set (ending in xxx_bin) that has binary labels (attack, no attack).  using this sub dataset you can confirm that the data is linearly sepparable, accuracy of 1, f1 of 1.


## created new reduced data with labels 'red_new'
,,,
red_new_df = raw_df[[  

                        # 'Switch ID',           # this is no general info but data from setup used to model data set
                        
                        # 'Port Number',         # this is no general info but data from setup used to model data set
                        'Received Packets', 
                        'Received Bytes', 
                        'Sent Bytes', 
                        'Sent Packets', 
                        'Port alive Duration (S)',
                        # 'Packets Rx Dropped',  # empty feature
                        # 'Packets Tx Dropped',  # empty feature
                        # 'Packets Rx Errors',   # empty feature
                        # 'Packets Tx Errors',   # empty feature
                        'Delta Received Packets', 
                        'Delta Received Bytes',
                        'Delta Sent Bytes', 
                        'Delta Sent Packets',
                        # 'Delta Port alive Duration (S)',  # feature witn a single value for the set 
                        # 'Delta Packets Rx Dropped',       # empty feature
                        # ' Delta Packets Tx Dropped',      # empty feature
                        # 'Delta Packets Rx Errors',        # empty feature
                        # 'Delta Packets Tx Errors',        # empty feature
                        # 'Connection Point',               # feature associated with test setup for data generation
                        'Total Load/Rate',
                        'Total Load/Latest', 
                        'Unknown Load/Rate', 
                        'Unknown Load/Latest',
                        'Latest bytes counter', 
                        # 'is_valid',                        # info from data generation set up
                        # 'Table ID',                        # empty feature
                        # 'Active Flow Entries',             # unknown feature source not replicable in real situation
                        'Packets Looked Up', 
                        'Packets Matched', 
                        # 'Max Size',                         # unknown feature source not replicable in real situation
                        'Label',
                        'Binary Label']]
                        ,,,



                      