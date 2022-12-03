

# **- UNR_IDD**

For this Capstone project we are using data fron the University of Nevada.  Specifically, their Reno Intrusion Detection Dataset (UNR-IDD). The main difference between UNR-IDD and other existing datasets is that UNR-IDD consists primarily of network port statistics. These refer to the observed port metrics recorded in switch/router ports within a networking environment. The dataset also includes delta port statistics which indicates the change in magnitude of observed port statistics within a time interval. Compared to datasets that primarily use flow level statistics, these port statistics can provide a fine-grained analysis of network flows from the port level as decisions are made at the port level versus the flow level. This can lead to rapid identification of potential intrusions. UNR-IDD also address the limitation of the presence of tail classes. The dataset ensures that there are enough samples for ML classifiers to achieve high F-Measure scores, uniquely. Our proposed dataset also ensures that there are no missing network metrics and that all data samples are filled.

**- Flow Simulation**

IPerf is used to create TCP and UDP data streams simulating network flows in virtual and real networks using dummy payloads. By using the Mininet API and IPerf, UNR-IDD created a Python script to simulate realistic network flows. Once every 5 seconds, UNR-IDD initiated Iperf traffic between a randomly chosen source-destination host pair with a bandwidth of 10 Mbps and a duration of 5 seconds. UNR-IDD then simulate flows under normal and intrusion conditions to gather data in every possible scenario. To ensure that each normal and anomaly category is minimally variable and adequately represented, UNR-IDD execute the same number of flows while simulating each scenario.


# **- Port Statistics**

The corresponding table shows the collected port statistics and their descriptions per port on every switch in the simulated SDN. These statistics relay the collected metrics and magnitudes from every single port within the SDN when a flow is simulated between two hosts. 


**- Port Statistic**|**Description**
---|---
Received Packets | Number of packets received by the port
Received Bytes |	Number of bytes received by the port
Sent Packets |	Number of packets sent by the port
Sent Bytes |	Number of bytes sent
Port alive | Duration	The time port has been alive in seconds
Packets Rx | Dropped	Number of packets dropped by the receiver
Packets Tx | Dropped	Number of packets dropped by the sender
Packets Rx | Errors	Number of transmit errors
Packets Tx | Errors	Number of receive errors



# **- Delta Port Statistics**

The corresponding table illustrates the collected delta port statistics and their descriptions per port on every switch. These delta statistics are used to capture the change in collected metrics from every single port within the SDN when a flow is simulated between two hosts. The time interval for these observed metrics is configured as 5 seconds, which can provide greater detail in detecting intrusions. 

**- Delta Port Statistic**|**Description**
---|---
Delta Received Packets|	Number of packets received by the port
Delta Received Bytes|	Number of bytes received by the port
Delta Sent Packets|	Number of packets sent by the port
Delta Sent Bytes|	Number of bytes sent
Delta Port alive| Duration	The time port has been alive in seconds
Delta Packets Rx| Dropped	Number of packets dropped by the receiver
Delta Packets Tx| Dropped	Number of packets dropped by the sender
Delta Packets Rx| Errors	Number of transmit errors
Delta Packets Tx| Errors	Number of receive errors



# **- Flow Entry and Flow Table Statistics**

Additionally, UNR-IDD also collect some flow entry and flow table statistics to work in conjunction with the collected port statistics as seen in the corresponding table. These metrics provide information about the conditions of switches in the network and can be collected in any network setting. 

**Statistic**|**Description**
---|---
Connection Point|	Network connection point expressed as a pair of the network element identifier and port number.
Total Load/Rate|	Obtain the current observed total load/rate (in bytes/s) on a link.
Total Load/Latest|	Obtain the latest total load bytes counter viewed on that link.
Unknown Load/Rate|	Obtain the current observed unknown-sized load/rate (in bytes/s) on a link.
Unknown Load/Latest|	Obtain the latest unknown-sized load bytes counter viewed on that link.
Time seen|	When the above-mentioned values were last seen.
is_valid|	Indicates whether this load was built on valid values.
TableID|	Returns the Table ID values.
ActiveFlowEntries|	Returns the number of active flow entries in this table.
PacketsLookedUp|	Returns the number of packets looked up in the table.
PacketsMatched|	Returns the number of packets that successfully matched in the table.
MaxSize|	Returns the maximum size of this table.

