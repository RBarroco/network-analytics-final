## Definition of the Problem

Network infrastructures are at risk from cyber-attacks and intrusions. 

This is an increasing concern as we continue to expand the applications of modern-day networking: i.e., Internet Of Things, smart homes, etc.

Cyber-attacks and intrusions can compromise their availability, confidentiality, and integrity. 

But these threats are difficult to detect unaided: they display network traffic patterns almost indistinguishable from normal traffic. 

## Our Proposed Solution

-We propose developing a ML-based Network Intrusion Detection (NID) system that can provide rapid identification of potential intrusions.  

-We also plan to test a DL-based (CNN) solution to see if we get better results [define results].

-This NID will:

    --let network administrators take corrective action to cancel these threats.
    --let network designers develop responses based on information from the NID.

-The NID will help reduce interruption of service and avoid or reduce interrupting critical tasks and its associated cost for the user and provider.

-The NID will have to monitor network flow (at port level), and robustly identify threats.



## Dataset

For this Capstone project we are using data fron the University of Nevada.

Specifically, their Reno Intrusion Detection Dataset (UNR-IDD).

The main difference between UNR-IDD and other existing datasets is that UNR-IDD consists primarily of network port statistics.

These refer to the observed port metrics recorded in switch/router ports within a networking environment.

The dataset also includes delta port statistics which indicates the change in magnitude of observed port statistics within a time interval.

Compared to datasets that primarily use flow level statistics, these port statistics can provide a fine-grained analysis of network flows from the port level as decisions are made at the port level versus the flow level.

This can lead to rapid identification of potential intrusions.

UNR-IDD also address the limitation of the presence of tail classes.

The dataset ensures that there are enough samples for ML classifiers to achieve high F-Measure scores, uniquely.

Our proposed dataset also ensures that there are no missing network metrics and that all data samples are filled.

* Renato Barroco
* Joaquin Gianantonio

[UNR-IDD-Dataset](https://www.tapadhirdas.com/unr-idd-dataset)
