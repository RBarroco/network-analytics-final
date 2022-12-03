from flask import Flask
from flask import request
from flask import jsonify
from pathlib import Path
import joblib
import pandas as pd
import numpy as np
import random

app = Flask(__name__)

BASE_DIR = Path("api.py").resolve(strict=True).parent


def sample_generator(id):
    """
    Sample generator, receives an integer as input and
    returns a tuple with a sample in dataframe format and a string with the type of network event.
    """
    sample_data_name = "X_red_new_test.csv"
    labels_data_name  = "y_red_new_test.csv"
    
    samples = pd.read_csv(sample_data_name)
    labels = pd.read_csv(labels_data_name)
    results_dict =    {
                        1: 'Blackhole',
                        2: 'Diversion',
                        3: 'Normal',
                        4: 'Overflow',
                        5: 'PortScan',
                        0: 'TCP-SYN'
                        }

    if id <= int(samples.shape[0]):

        sample = samples.iloc[[id]]
        label = results_dict[int(labels.iloc[[id]].values)]
        # Sample is a dataFrame with (1, 16)
        # label is a string
        return sample
    else:
        print("Sample ID excedes number of samples")

def predi(sample):
    """
    predi function: takes a sample network interaction in the form of a dataframe and 
    retuns string with the prediction of the network event.
    
    """
    model_name = "model_xgbc_03.joblib"
    
    model_file = Path(BASE_DIR).joinpath(model_name)
    
    if not model_file.exists():
        return False

    model = joblib.load(model_file)
    
    results_dict =    {
                        1: 'Blackhole',
                        2: 'Diversion',
                        3: 'Normal',
                        4: 'Overflow',
                        5: 'PortScan',
                        0: 'TCP-SYN'
                        }

    result_sample = results_dict[model.predict(sample)[0]]

    

    results_dict_com =    {
                        'Blackhole': 'Blackhole: An attack that targets network switches/routers to discard the packets that pass through, instead of relaying them on to the next hop',
                        'Diversion': 'Traffic Diversion: A attack that targets network switches/routers to reroute the direction of packets away from their destination, intending to increase travel time and/or spying on network traffic through a man-in-the-middle scenario',
                        'Normal': 'Normal network behavior',
                        'Overflow': 'Flow Table Overflow: An attack that targets network switches/routers where attacks compromise the functionality of a switch/router by consuming the flow tables that forward packets with illegitimate flow entries and rules so that legitimate flow entries and rules cannot be installed',
                        'PortScan': 'Port scan: An attack in which attackers scan available ports on a host device to learn information about the services, versions, and even security mechanisms that are running on that host. ',
                        'TCP-SYN': 'TCP-SYN Flood: A Distributed Denial of Service (DDoS) attack where attackers target hosts by initiating many Transmission Control Protocol (TCP) handshake processes without waiting for the response from the target node. By doing so, the target device\'s resources are consumed as it has to keep allocating some memory space for every new TCP request'
                        }
    result_total = results_dict_com[result_sample]

    return result_total


# # if a request POST is made on this url it runs the running function below
@app.route('/all_in_prediction',methods=['GET']) 
# def all_in_prediction(id: int):
def all_in_prediction():
    print("[+] request received")
    id = random.randint(1, 101)
    sample = sample_generator(id)
    prediction = predi(sample)


    
    sample_dict = sample.to_dict()
    response = {"prediction": prediction, "id": id, "sample": sample_dict}
    print("[+] results {}".format(response))

    
    return response
