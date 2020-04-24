---
permalink: "/task-force-2-2/"

title: "OSIPI Task Force 2.2: ASL contributions"
aims: Collect and harmonise ASL code snippets from developers
description: |
    Task force 2.2 will develop a library of open-source functions, scripts and in-house pipelines for ASL perfusion imaging analysis. This is aimed at developers of ASL perfusion methods looking for specific functionality or development templates, or who want to share their own in-house developments with others. Contributions will be sourced from the community, and may include individual functions and more complete pipelines in various programming languages. Task force 2.2 will organise these in a coherent and well-documented library structure as defined by task force 2.1, then identify and develop any missing functionality. Note that an inventory of full pipelines are in TF1.1.
leads:
  - name: Ananth Madhuranthakam
    location: UT Southwestern
    website: https://www.linkedin.com/in/ananth-madhuranthakam-4771189/
    role: Lead
  - name: Li Zhao
    location: Children’s National Medical Center, Washington, D.C.
    website: https://www.linkedin.com/in/lizhaomri/
    role: Co-lead    
members:
  - Sudipto Dolui
  - Rebeca Echeverria Chasco
  - Patrick Hales
  - Maria Mora
  - Yiming Wang
  - Limin Zhou
status:
  - Lead identified
  - 31.03.2010 Co-lead identified
  - Confirming members and drafting roadmap...
links:
  - website: https://drive.google.com/drive/folders/16VPJ4Wq-YW8GA5cddMpKgWKs4Ua5dPEV
    description: |
      Task force folder on drive - storage space for public or private documents developed by the task force.
  - website: https://osipi.slack.com/archives/CQV6GNPMJ
    description: |
      Task force slack channel - for discussions between task force members.
---

{% include taskforce_content.md %}
<!--- Please include your task force contents below, free formatting -->
# TF2.2 Roadmap
## Milestone #0: Task Force Roadmap
Description: Initiate task force 2.2 - ASL Code Contributions.
Identify the TF leads
Confirm the TF members and establish the connections in Slack
Update the OSIPI website and Slack channels
Define the components of the Roadmap
Responsible: Ananth Madhuranthakam
Means of verification: Draft roadmap in google drive and members listed on website
Time of delivery: 1 May 2020

## Milestone #1: ASL library v1.0 scope defined
Description: Define the scope of the ASL code library
Determine functionality to be targeted for Releases v0.1 and v1.0
Identify specific components of the task force and the corresponding timelines
Identify and recruit specific leads for each component of the task force
Identify the components that need interactions with other TF (e.g. 2.1, 2.3, 4.1 etc.)
Identify the liaisons that can work with different TFs and our TF
Scope - We will keep it focused on brain applications for this version. Beginning with images of vendors’ products would be the priority, including the PASL and pCASL for the brain imaging. and eventually incorporate reconstruction from k-space. Anything beyond that would be out of scope for this iteration. 
Responsible: Ananth Madhuranthakam, Li Zhao
Means of verification: Scope document available on OSIPI website and call for code contributions send to ISMRM perfusion study group mailing list
Time of delivery: 1 Aug 2020

## Milestone #2: Complete v1.0 Code Collection
Description: Gather existing ASL image processing code snippets.
Create a repository of various ASL processing code(s)
Reach out to the teams / members to gather the code(s)
Identify code(s) for various major vendors 
Deposit the code(s) in private Github repository. The submission before October 1, 2020 will be included in the coming version M1. 
Document the code origin, functionality, sample data from the owner and details in GoogleDocs
Update the OSIPI website and Slack channels
Possible ISMRM abstract submission
Responsible: TBD
Means of verification: Overview of available code and functionality published on OSIPI TF website and raw code uploaded to repository
Time of delivery: 1 Nov 2020

## Deliverable #1: ASL library v0.1
Description: Establish a documented library with limited v0.1 functionality, documented, tested and validated with the external data.
Coordinate with TF2.1 regarding the library structures
Liaise with TF 4.1 for classification, terminology, notations
Build relevant structures for individual data processing
Build structures that can be incorporated into TF2.1 pipelines
Coordinate with TF2.1 to identify missing pieces for the pipeline
Deposit the code(s) in private Github repository
Document the library structure, functionality, and details in GoogleDocs
Update the OSIPI website and Slack channels
Responsible: TBD
Means of verification: Commit with final code to OSIPI code library
Time of delivery: 1 Feb 2021

## Milestone #3: v1.0 ASL library drafted
Description: Establish a library with complete v1.0 functionality, ready for testing
Responsible: Developers
Means of verification: Commit with final code to OSIPI code library
Time of delivery: 1 May 2021

## Milestone #4: v1.0 Testing completed
Description: Finalize the ASL processing code and libraries.
Develop unit tests for code contributions in the library
Execute tests and collect results and feedback to developers (iterate as needed)
Reiterate the processes in Milestone #4 to finalize the code(s) and libraries
Deposit finalized code(s) and libraries in Github
Update the OSIPI website and Slack channels
Responsible: Testers
Means of verification: Test reports released on OSIPI website
Time of delivery: 1 August 2021

## Milestone #5: v1.0 documentation completed
Description: Complete documentation for developers and users
Responsible: TBD
Means of verification: Commit with final code to OSIPI code library, ISMRM abstract submitted
Time of delivery: 1 Nov 2021

## Deliverable #2: ASL software Library v1.0 
Description: Final software library and corresponding documentation
Responsible: Ananth Madhuranthakam, Li Zhao
Means of verification: Final code committed and branches merged
Time of delivery: 1 Feb 2022

## Deliverable #3: Manuscript 
Description: Manuscript detailing the ASL library
Responsible: Ananth Madhuranthakam
Means of verification: Manuscript submission
Time of delivery: 1 May 2022 (or for special issue of OSIPI)
