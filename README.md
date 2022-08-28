# PROJECT XADEX

**PROJECT XADEX** was created by Xun Yi, Allyne, Elijah, Xian Xiang, Declan as part of `Ellipsis Tech Series Hackathon 2022`. 

We were unable to deploy the file in time. The following are the steps to run the project. 
```
//Ensure node.js is installed
cd projectcompliance
npm i 
npm start
```

___

# Description

**PROJECT XADEX** was built primarily with `ReactJS`. We worked on `AWS Amplify` as a database but were unable to fully integrate it before the submission. 

# Features
There are two main features of our web application:

1. Compliance Checker
2. Structural Checker

## Compliance Checker
The compliance checker is targetted towards customers or entities that a Fintech / Crypto client might be interested in onboarding or working with. 

The service idea we want to represent is an API-like service offered by Goldman Sach and powered by their financial expertise which will allow Fintech and Crypto clients to access them easily to perform a compliance check on a customer or entity.

In our application, we represented it as a input form where details are entered and then a dummy compliance report is presented to the user. 

## Structural Checker
The structural checker is targetted towards Fintech / Crypto startups that are looking into ensuring that the way they have structured their company complys with regulation. 

The service idea we want to represent is a flowchart builder where clients can chart out their business structure. As entities, services and responsibilities likely differ between various companies, we decide to allow the client to enter in these information freely. 

Similarly to how Microsoft Compliance Manager works, we believe the backend processing logic can be built through a combination of AI and NLP. With a graphical representation of the business structure, we believe this will allow us to check and review if there are any regulatory breaches.

In our application, we represented it as a flowchart builder where a client can create entities and provide information to them. Upon submitting, a dummy report will be presented to the user.

___

## Footnote

A big part of our services are reliant on the backend processing logic of the financial institution. After doing some reading on how Microsoft Compliance Manager does this, we realised it was unlikely we could accomplish anything close or useful in the short time span of the hackathon. Therefore, we decided to "blackbox"
the backend processing away and focus on other elements.

___

# Thank You.