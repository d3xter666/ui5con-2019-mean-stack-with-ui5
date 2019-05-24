sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
], (Controller, Fragment) => {
    "use strict";

    const data = [
        {
            "id": 1,
            "avatar": "https://robohash.org/accusantiumtemporanon.bmp?size=50x50&set=set1",
            "title": "Mr",
            "first_name": "Richy",
            "last_name": "Gisbey",
            "job_title": "Payment Adjustment Coordinator",
            "email": "rgisbey0@cdc.gov",
            "company": "Yodo",
            "department": "Support",
            "languages": ["Māori", "West Frisian", "Burmese"],
            "university": "Newman University",
            "self_decription": "seize user-centric portals",
            "skills": ["Materials Science", "CFML", "XDoclet", "FDA GMP", "BSP", "QRC", "Beauty Industry", "LDA"]
        },
        {
            "id": 2,
            "avatar": "https://robohash.org/eanesciuntmollitia.bmp?size=50x50&set=set1",
            "title": "Mrs",
            "first_name": "Toiboid",
            "last_name": "Kennon",
            "job_title": "Account Executive",
            "email": "tkennon1@networksolutions.com",
            "company": "Talane",
            "department": "Legal",
            "languages": ["Persian", "Spanish"],
            "university": "Soka University of America",
            "self_decription": "target world-class action-items",
            "skills": ["PVST+", "PTP", "NDS", "Olive Oil", "Rigging", "CADS RC", "HP Storage", "Substance Use Disorders", "EBP", "ISO 22000"]
        },
        // {
        //     "id": 3,
        //     "avatar": "https://robohash.org/omnistemporaculpa.png?size=50x50&set=set1",
        //     "title": "Dr",
        //     "first_name": "Emmy",
        //     "last_name": "Rickasse",
        //     "job_title": "Tax Accountant",
        //     "email": "erickasse2@army.mil",
        //     "company": "Twiyo",
        //     "department": "Engineering",
        //     "languages": ["Croatian", "Northern Sotho", "Somali", "Malayalam"],
        //     "university": "California Baptist College",
        //     "self_decription": "scale efficient markets",
        //     "skills": ["Socket.io", "Project Implementation", "IKE", "Performing Arts", "Utility Industry", "MySQLi"]
        // },
        // {
        //     "id": 4,
        //     "avatar": "https://robohash.org/quoquisquamet.bmp?size=50x50&set=set1",
        //     "title": "Mrs",
        //     "first_name": "Ethelda",
        //     "last_name": "Oswal",
        //     "job_title": "Registered Nurse",
        //     "email": "eoswal3@amazon.de",
        //     "company": "Jaxnation",
        //     "department": "Research and Development",
        //     "languages": ["Fijian", "Filipino", "Quechua", "Hebrew", "Polish"],
        //     "university": "Novosibirsk State University",
        //     "self_decription": "transform B2C communities",
        //     "skills": ["Enterprise Risk Management", "Rehabilitation Psychology", "Title IV", "SOA"]
        // },
        // {
        //     "id": 5,
        //     "avatar": "https://robohash.org/aperiamreprehenderitdeserunt.jpg?size=50x50&set=set1",
        //     "title": "Mr",
        //     "first_name": "Cecilla",
        //     "last_name": "Castagne",
        //     "job_title": "Account Executive",
        //     "email": "ccastagne4@theguardian.com",
        //     "company": "Bluejam",
        //     "department": "Research and Development",
        //     "languages": ["Swati", "Portuguese"],
        //     "university": "American Business & Technology University",
        //     "self_decription": "transform one-to-one supply-chains",
        //     "skills": ["nVision", "PKCS", "Start-up Ventures", "OTA", "TTD", "WFS", "Customer Support", "Oilfield"]
        // },
        // {
        //     "id": 6,
        //     "avatar": "https://robohash.org/aliquidautcorporis.bmp?size=50x50&set=set1",
        //     "title": "Ms",
        //     "first_name": "Carmita",
        //     "last_name": "Rising",
        //     "job_title": "Chief Design Engineer",
        //     "email": "crising5@goodreads.com",
        //     "company": "Devify",
        //     "department": "Sales",
        //     "languages": ["Korean", "Georgian", "Albanian", "Thai", "Somali"],
        //     "university": "Indian Veterinary Research Institute",
        //     "self_decription": "envisioneer innovative solutions",
        //     "skills": ["MPLAB", "PBX", "CDPE", "Teaching", "WBEM", "Pinterest", "Xilinx", "IES VE", "Apache Pig", "IES Virtual Environment"]
        // },
        // {
        //     "id": 7,
        //     "avatar": "https://robohash.org/liberosedvero.png?size=50x50&set=set1",
        //     "title": "Dr",
        //     "first_name": "Reid",
        //     "last_name": "Bortolomei",
        //     "job_title": "Account Coordinator",
        //     "email": "rbortolomei6@theatlantic.com",
        //     "company": "Edgeify",
        //     "department": "Accounting",
        //     "languages": ["Latvian", "Kurdish", "Hungarian", "Tetum"],
        //     "university": "University of Sydney",
        //     "self_decription": "recontextualize enterprise mindshare",
        //     "skills": ["Afghanistan", "ICP-OES", "Oil &amp; Gas Law", "RTLS", "JDO", "Commercial Lending", "TCAS"]
        // },
        // {
        //     "id": 8,
        //     "avatar": "https://robohash.org/utminimased.jpg?size=50x50&set=set1",
        //     "title": "Honorable",
        //     "first_name": "Roslyn",
        //     "last_name": "Stallan",
        //     "job_title": "Statistician IV",
        //     "email": "rstallan7@e-recht24.de",
        //     "company": "Gabcube",
        //     "department": "Training",
        //     "languages": ["Malay", "Guaraní", "Maltese"],
        //     "university": "Polonia University in Czêstochowa",
        //     "self_decription": "seize back-end initiatives",
        //     "skills": ["QAC", "KOL Development", "PDP", "International Political Economy", "Hydraulics", "Abstraction", "Special Effects", "ZoomInfo"]
        // },
        // {
        //     "id": 9,
        //     "avatar": "https://robohash.org/consecteturpraesentiumea.png?size=50x50&set=set1",
        //     "title": "Mr",
        //     "first_name": "Chrysa",
        //     "last_name": "O'Gavin",
        //     "job_title": "Analyst Programmer",
        //     "email": "cogavin8@ftc.gov",
        //     "company": "Realfire",
        //     "department": "Training",
        //     "languages": ["Sotho"],
        //     "university": "Islamic Azad University, Shahryar",
        //     "self_decription": "envisioneer B2C metrics",
        //     "skills": ["KPI Implementation", "dtSearch", "WBTs", "Urban Design", "Submittals", "WHIMS", "TF-CBT"]
        // },
        // {
        //     "id": 10,
        //     "avatar": "https://robohash.org/quamdoloresdolore.png?size=50x50&set=set1",
        //     "title": "Ms",
        //     "first_name": "Godard",
        //     "last_name": "Smead",
        //     "job_title": "Recruiter",
        //     "email": "gsmead9@dion.ne.jp",
        //     "company": "Voonte",
        //     "department": "Training",
        //     "languages": ["Assamese", "Catalan", "Norwegian", "Gujarati", "Thai"],
        //     "university": "Universitas Ma Chung",
        //     "self_decription": "reinvent best-of-breed metrics",
        //     "skills": ["FCC License", "Joint Military Operations", "Music Education", "EU Competition Law", "Airport Management", "CDS", "HR Strategy", "Oracle E-Business Suite"]
        // },
        // {
        //     "id": 11,
        //     "avatar": "https://robohash.org/omnisvoluptassapiente.bmp?size=50x50&set=set1",
        //     "title": "Dr",
        //     "first_name": "Tanya",
        //     "last_name": "Marchent",
        //     "job_title": "Senior Financial Analyst",
        //     "email": "tmarchenta@webeden.co.uk",
        //     "company": "Livepath",
        //     "department": "Research and Development",
        //     "languages": ["Guaraní"],
        //     "university": "Warren Wilson College",
        //     "self_decription": "morph bleeding-edge action-items",
        //     "skills": ["Amadeus", "Dynamic Speaker", "Online Advertising", "University Teaching", "CDL", "MRSA", "Award Winner", "Financial Risk Management"]
        // },
        // {
        //     "id": 12,
        //     "avatar": "https://robohash.org/enimplaceataut.bmp?size=50x50&set=set1",
        //     "title": "Mrs",
        //     "first_name": "Maryl",
        //     "last_name": "Lorens",
        //     "job_title": "Account Representative I",
        //     "email": "mlorensb@ftc.gov",
        //     "company": "Fanoodle",
        //     "department": "Services",
        //     "languages": ["Bulgarian"],
        //     "university": "Universidad del Istmo",
        //     "self_decription": "syndicate dot-com infrastructures",
        //     "skills": ["CBCP", "TSP", "TCPA", "Ownership", "UNIX Utilities", "Young Adults"]
        // },
        // {
        //     "id": 13,
        //     "avatar": "https://robohash.org/auteaerror.bmp?size=50x50&set=set1",
        //     "title": "Mr",
        //     "first_name": "Chloris",
        //     "last_name": "Preene",
        //     "job_title": "Internal Auditor",
        //     "email": "cpreenec@skype.com",
        //     "company": "Ozu",
        //     "department": "Sales",
        //     "languages": ["Mongolian", "Ndebele", "Assamese"],
        //     "university": "Prince Sultan College for Tourism and Hotel Scinces",
        //     "self_decription": "transition extensible content",
        //     "skills": ["OAuth", "RDMA", "Land Development"]
        // },
        // {
        //     "id": 14,
        //     "avatar": "https://robohash.org/dignissimostemporaenim.jpg?size=50x50&set=set1",
        //     "title": "Ms",
        //     "first_name": "Caz",
        //     "last_name": "Streatley",
        //     "job_title": "Geologist II",
        //     "email": "cstreatleyd@spiegel.de",
        //     "company": "Zava",
        //     "department": "Support",
        //     "languages": ["Malayalam", "Lao"],
        //     "university": "Fachhochschule Rottenburg, Hochschule für Forstwirtschaft",
        //     "self_decription": "grow clicks-and-mortar architectures",
        //     "skills": ["Athletic Training", "Windows NT", "Spring MVC"]
        // },
        // {
        //     "id": 15,
        //     "avatar": "https://robohash.org/autemnonvoluptate.jpg?size=50x50&set=set1",
        //     "title": "Dr",
        //     "first_name": "Jemie",
        //     "last_name": "Rego",
        //     "job_title": "Information Systems Manager",
        //     "email": "jregoe@dropbox.com",
        //     "company": "Mymm",
        //     "department": "Business Development",
        //     "languages": ["Afrikaans"],
        //     "university": "St. Petersburg State Institute of Technology (Technological University)",
        //     "self_decription": "expedite proactive models",
        //     "skills": ["Culture Change", "Invoicing", "Validation", "Lutron", "Patents", "Emergency Medicine", "BPWin"]
        // },
        // {
        //     "id": 16,
        //     "avatar": "https://robohash.org/autmaioresid.png?size=50x50&set=set1",
        //     "title": "Rev",
        //     "first_name": "Braden",
        //     "last_name": "Kewley",
        //     "job_title": "Speech Pathologist",
        //     "email": "bkewleyf@state.tx.us",
        //     "company": "Quire",
        //     "department": "Sales",
        //     "languages": ["Papiamento"],
        //     "university": "Katsina University",
        //     "self_decription": "incubate 24/7 schemas",
        //     "skills": ["RMDS", "DVB-H", "WCDMA", "GMLAN", "Pediatrics", "E-on Vue", "Music Festivals", "Technical Documentation", "Rock Mechanics", "Clinical Development"]
        // },
        // {
        //     "id": 17,
        //     "avatar": "https://robohash.org/fugitametvel.png?size=50x50&set=set1",
        //     "title": "Ms",
        //     "first_name": "Marti",
        //     "last_name": "Dupoy",
        //     "job_title": "Systems Administrator IV",
        //     "email": "mdupoyg@shutterfly.com",
        //     "company": "Ntag",
        //     "department": "Services",
        //     "languages": ["Tamil", "Pashto"],
        //     "university": "Hanazono University",
        //     "self_decription": "extend B2B vortals",
        //     "skills": ["Valves", "Development Economics", "Vsftpd", "NWDI", "Game Development", "Embedded Linux", "Cardiac MRI", "SRED"]
        // },
        // {
        //     "id": 18,
        //     "avatar": "https://robohash.org/optiomaximerem.bmp?size=50x50&set=set1",
        //     "title": "Rev",
        //     "first_name": "Dru",
        //     "last_name": "Sinson",
        //     "job_title": "Marketing Manager",
        //     "email": "dsinsonh@squidoo.com",
        //     "company": "Latz",
        //     "department": "Accounting",
        //     "languages": ["Maltese", "Armenian"],
        //     "university": "Kharkiv National University of Radio Electronics",
        //     "self_decription": "monetize magnetic experiences",
        //     "skills": ["BMI", "Analytical Ultracentrifugation", "TDMA", "Glassfish", "PPC Bid Management", "OATS", "Salesforce.com", "BOSIET", "IS-IS"]
        // },
        // {
        //     "id": 19,
        //     "avatar": "https://robohash.org/molestiaeaspernaturdoloremque.jpg?size=50x50&set=set1",
        //     "title": "Mr",
        //     "first_name": "Cathyleen",
        //     "last_name": "Schneidar",
        //     "job_title": "GIS Technical Architect",
        //     "email": "cschneidari@purevolume.com",
        //     "company": "Innojam",
        //     "department": "Marketing",
        //     "languages": ["Māori", "Dzongkha", "Tswana"],
        //     "university": "Hochschule für Technik, Wirtschaft und Kultur Leipzig (FH)",
        //     "self_decription": "drive robust applications",
        //     "skills": ["SIP Trunking", "Operational Due Diligence", "IWR", "Bloomberg Terminal", "LLU", "Community Outreach", "GIS", "xCAT"]
        // },
        // {
        //     "id": 20,
        //     "avatar": "https://robohash.org/explicaboidperferendis.jpg?size=50x50&set=set1",
        //     "title": "Mrs",
        //     "first_name": "Lydia",
        //     "last_name": "Purton",
        //     "job_title": "Speech Pathologist",
        //     "email": "lpurtonj@un.org",
        //     "company": "Vimbo",
        //     "department": "Sales",
        //     "languages": ["Icelandic", "Japanese", "Dzongkha"],
        //     "university": "Instituto Nacional de Matemática Pura e Aplicada - IMPA",
        //     "self_decription": "extend 24/7 users",
        //     "skills": ["RPM", "MXF", "Drainage", "EMS", "Image Manipulation", "KML", "Functional Training", "XML Publisher", "Medical Writing"]
        // },
        // {
        //     "id": 21,
        //     "avatar": "https://robohash.org/suntreprehenderitnecessitatibus.jpg?size=50x50&set=set1",
        //     "title": "Ms",
        //     "first_name": "Astrid",
        //     "last_name": "Soutar",
        //     "job_title": "Cost Accountant",
        //     "email": "asoutark@typepad.com",
        //     "company": "Talane",
        //     "department": "Marketing",
        //     "languages": ["Lithuanian", "Mongolian"],
        //     "university": "The Maryland Institute, College of Art",
        //     "self_decription": "integrate innovative relationships",
        //     "skills": ["Microsoft Project", "GNMA", "Air Quality", "Investment Banking", "QAC"]
        // },
        // {
        //     "id": 22,
        //     "avatar": "https://robohash.org/harumquamiste.png?size=50x50&set=set1",
        //     "title": "Rev",
        //     "first_name": "Salvatore",
        //     "last_name": "Raatz",
        //     "job_title": "Senior Cost Accountant",
        //     "email": "sraatzl@tamu.edu",
        //     "company": "Chatterbridge",
        //     "department": "Accounting",
        //     "languages": ["Albanian"],
        //     "university": "Benson Idahosa University",
        //     "self_decription": "cultivate customized relationships",
        //     "skills": ["Public Health", "Business Strategy", "Biochemistry", "HCSS", "DNA replication", "GPON", "Non-compete Agreements", "Strategic Partnerships"]
        // },
        // {
        //     "id": 23,
        //     "avatar": "https://robohash.org/utinventoretemporibus.jpg?size=50x50&set=set1",
        //     "title": "Honorable",
        //     "first_name": "Taryn",
        //     "last_name": "Luno",
        //     "job_title": "Social Worker",
        //     "email": "tlunom@opera.com",
        //     "company": "Ntag",
        //     "department": "Services",
        //     "languages": ["Hebrew", "Haitian Creole"],
        //     "university": "Aomori Public College",
        //     "self_decription": "productize sexy eyeballs",
        //     "skills": ["CMA", "Xara", "Business Objects", "IVR", "Vector NTI"]
        // },
        // {
        //     "id": 24,
        //     "avatar": "https://robohash.org/nonconsequaturdoloribus.bmp?size=50x50&set=set1",
        //     "title": "Dr",
        //     "first_name": "Orton",
        //     "last_name": "Pawlowicz",
        //     "job_title": "Financial Advisor",
        //     "email": "opawlowiczn@ebay.com",
        //     "company": "Mydeo",
        //     "department": "Human Resources",
        //     "languages": ["Georgian", "Danish"],
        //     "university": "Fachhochschule Bochum",
        //     "self_decription": "disintermediate rich platforms",
        //     "skills": ["Photo Shoots", "Financial Risk", "Knowledge Representation", "RVM", "Flights", "Recruiting", "RCP", "Occupational Health Nursing"]
        // }
    ];

    var userMeta = {
        titles: [{"title": "Mr"}, {"title": "Mrs"}, {"title": "Dr"}, {"title": "Ms"}, {"title": "Honorable"}, {"title": "Rev"}],
        job_titles: [{"job_title": "Payment Adjustment Coordinator"}, {"job_title": "Account Executive"}, {"job_title": "Tax Accountant"}, {"job_title": "Registered Nurse"}, {"job_title": "Account Executive"}, {"job_title": "Chief Design Engineer"}, {"job_title": "Account Coordinator"}, {"job_title": "Statistician IV"}, {"job_title": "Analyst Programmer"}, {"job_title": "Recruiter"}, {"job_title": "Senior Financial Analyst"}, {"job_title": "Account Representative I"}, {"job_title": "Internal Auditor"}, {"job_title": "Geologist II"}, {"job_title": "Information Systems Manager"}, {"job_title": "Speech Pathologist"}, {"job_title": "Systems Administrator IV"}, {"job_title": "Marketing Manager"}, {"job_title": "GIS Technical Architect"}, {"job_title": "Speech Pathologist"}, {"job_title": "Cost Accountant"}, {"job_title": "Senior Cost Accountant"}, {"job_title": "Social Worker"}, {"job_title": "Financial Advisor"}],
        departments: [{"department": "Support"}, {"department": "Legal"}, {"department": "Engineering"}, {"department": "Research and Development"}, {"department": "Research and Development"}, {"department": "Sales"}, {"department": "Accounting"}, {"department": "Training"}, {"department": "Training"}, {"department": "Training"}, {"department": "Research and Development"}, {"department": "Services"}, {"department": "Sales"}, {"department": "Support"}, {"department": "Business Development"}, {"department": "Sales"}, {"department": "Services"}, {"department": "Accounting"}, {"department": "Marketing"}, {"department": "Sales"}, {"department": "Marketing"}, {"department": "Accounting"}, {"department": "Services"}, {"department": "Human Resources"}],
        languages: [{"lang": "Māori"}, {"lang": "West Frisian"}, {"lang": "Burmese"}, {"lang": "Persian"}, {"lang": "Spanish"}, {"lang": "Croatian"}, {"lang": "Northern Sotho"}, {"lang": "Somali"}, {"lang": "Malayalam"}, {"lang": "Fijian"}, {"lang": "Filipino"}, {"lang": "Quechua"}, {"lang": "Hebrew"}, {"lang": "Polish"}, {"lang": "Swati"}, {"lang": "Portuguese"}, {"lang": "Korean"}, {"lang": "Georgian"}, {"lang": "Albanian"}, {"lang": "Thai"}, {"lang": "Latvian"}, {"lang": "Kurdish"}, {"lang": "Hungarian"}, {"lang": "Tetum"}, {"lang": "Malay"}, {"lang": "Guaraní"}, {"lang": "Maltese"}, {"lang": "Sotho"}, {"lang": "Assamese"}, {"lang": "Catalan"}, {"lang": "Norwegian"}, {"lang": "Gujarati"}, {"lang": "Bulgarian"}, {"lang": "Mongolian"}, {"lang": "Ndebele"}, {"lang": "Lao"}, {"lang": "Afrikaans"}, {"lang": "Papiamento"}, {"lang": "Tamil"}, {"lang": "Pashto"}, {"lang": "Armenian"}, {"lang": "Dzongkha"}, {"lang": "Tswana"}, {"lang": "Icelandic"}, {"lang": "Japanese"}, {"lang": "Lithuanian"}, {"lang": "Haitian Creole"}, {"lang": "Danish"}],
        skills: [{"skill": "Materials Science"}, {"skill": "CFML"}, {"skill": "XDoclet"}, {"skill": "FDA GMP"}, {"skill": "BSP"}, {"skill": "QRC"}, {"skill": "Beauty Industry"}, {"skill": "LDA"}, {"skill": "PVST+"}, {"skill": "PTP"}, {"skill": "NDS"}, {"skill": "Olive Oil"}, {"skill": "Rigging"}, {"skill": "CADS RC"}, {"skill": "HP Storage"}, {"skill": "Substance Use Disorders"}, {"skill": "EBP"}, {"skill": "ISO 22000"}, {"skill": "Socket.io"}, {"skill": "Project Implementation"}, {"skill": "IKE"}, {"skill": "Performing Arts"}, {"skill": "Utility Industry"}, {"skill": "MySQLi"}, {"skill": "Enterprise Risk Management"}, {"skill": "Rehabilitation Psychology"}, {"skill": "Title IV"}, {"skill": "SOA"}, {"skill": "nVision"}, {"skill": "PKCS"}, {"skill": "Start-up Ventures"}, {"skill": "OTA"}, {"skill": "TTD"}, {"skill": "WFS"}, {"skill": "Customer Support"}, {"skill": "Oilfield"}, {"skill": "MPLAB"}, {"skill": "PBX"}, {"skill": "CDPE"}, {"skill": "Teaching"}, {"skill": "WBEM"}, {"skill": "Pinterest"}, {"skill": "Xilinx"}, {"skill": "IES VE"}, {"skill": "Apache Pig"}, {"skill": "IES Virtual Environment"}, {"skill": "Afghanistan"}, {"skill": "ICP-OES"}, {"skill": "Oil &amp; Gas Law"}, {"skill": "RTLS"}, {"skill": "JDO"}, {"skill": "Commercial Lending"}, {"skill": "TCAS"}, {"skill": "QAC"}, {"skill": "KOL Development"}, {"skill": "PDP"}, {"skill": "International Political Economy"}, {"skill": "Hydraulics"}, {"skill": "Abstraction"}, {"skill": "Special Effects"}, {"skill": "ZoomInfo"}, {"skill": "KPI Implementation"}, {"skill": "dtSearch"}, {"skill": "WBTs"}, {"skill": "Urban Design"}, {"skill": "Submittals"}, {"skill": "WHIMS"}, {"skill": "TF-CBT"}, {"skill": "FCC License"}, {"skill": "Joint Military Operations"}, {"skill": "Music Education"}, {"skill": "EU Competition Law"}, {"skill": "Airport Management"}, {"skill": "CDS"}, {"skill": "HR Strategy"}, {"skill": "Oracle E-Business Suite"}, {"skill": "Amadeus"}, {"skill": "Dynamic Speaker"}, {"skill": "Online Advertising"}, {"skill": "University Teaching"}, {"skill": "CDL"}, {"skill": "MRSA"}, {"skill": "Award Winner"}, {"skill": "Financial Risk Management"}, {"skill": "CBCP"}, {"skill": "TSP"}, {"skill": "TCPA"}, {"skill": "Ownership"}, {"skill": "UNIX Utilities"}, {"skill": "Young Adults"}, {"skill": "OAuth"}, {"skill": "RDMA"}, {"skill": "Land Development"}, {"skill": "Athletic Training"}, {"skill": "Windows NT"}, {"skill": "Spring MVC"}, {"skill": "Culture Change"}, {"skill": "Invoicing"}, {"skill": "Validation"}, {"skill": "Lutron"}, {"skill": "Patents"}, {"skill": "Emergency Medicine"}, {"skill": "BPWin"}, {"skill": "RMDS"}, {"skill": "DVB-H"}, {"skill": "WCDMA"}, {"skill": "GMLAN"}, {"skill": "Pediatrics"}, {"skill": "E-on Vue"}, {"skill": "Music Festivals"}, {"skill": "Technical Documentation"}, {"skill": "Rock Mechanics"}, {"skill": "Clinical Development"}, {"skill": "Valves"}, {"skill": "Development Economics"}, {"skill": "Vsftpd"}, {"skill": "NWDI"}, {"skill": "Game Development"}, {"skill": "Embedded Linux"}, {"skill": "Cardiac MRI"}, {"skill": "SRED"}, {"skill": "BMI"}, {"skill": "Analytical Ultracentrifugation"}, {"skill": "TDMA"}, {"skill": "Glassfish"}, {"skill": "PPC Bid Management"}, {"skill": "OATS"}, {"skill": "Salesforce.com"}, {"skill": "BOSIET"}, {"skill": "IS-IS"}, {"skill": "SIP Trunking"}, {"skill": "Operational Due Diligence"}, {"skill": "IWR"}, {"skill": "Bloomberg Terminal"}, {"skill": "LLU"}, {"skill": "Community Outreach"}, {"skill": "GIS"}, {"skill": "xCAT"}, {"skill": "RPM"}, {"skill": "MXF"}, {"skill": "Drainage"}, {"skill": "EMS"}, {"skill": "Image Manipulation"}, {"skill": "KML"}, {"skill": "Functional Training"}, {"skill": "XML Publisher"}, {"skill": "Medical Writing"}, {"skill": "Microsoft Project"}, {"skill": "GNMA"}, {"skill": "Air Quality"}, {"skill": "Investment Banking"}, {"skill": "Public Health"}, {"skill": "Business Strategy"}, {"skill": "Biochemistry"}, {"skill": "HCSS"}, {"skill": "DNA replication"}, {"skill": "GPON"}, {"skill": "Non-compete Agreements"}, {"skill": "Strategic Partnerships"}, {"skill": "CMA"}, {"skill": "Xara"}, {"skill": "Business Objects"}, {"skill": "IVR"}, {"skill": "Vector NTI"}, {"skill": "Photo Shoots"}, {"skill": "Financial Risk"}, {"skill": "Knowledge Representation"}, {"skill": "RVM"}, {"skill": "Flights"}, {"skill": "Recruiting"}, {"skill": "RCP"}, {"skill": "Occupational Health Nursing"}],
        companies: [{"company": "Yodo"}, {"company": "Talane"}, {"company": "Twiyo"}, {"company": "Jaxnation"}, {"company": "Bluejam"}, {"company": "Devify"}, {"company": "Edgeify"}, {"company": "Gabcube"}, {"company": "Realfire"}, {"company": "Voonte"}, {"company": "Livepath"}, {"company": "Fanoodle"}, {"company": "Ozu"}, {"company": "Zava"}, {"company": "Mymm"}, {"company": "Quire"}, {"company": "Ntag"}, {"company": "Latz"}, {"company": "Innojam"}, {"company": "Vimbo"}, {"company": "Talane"}, {"company": "Chatterbridge"}, {"company": "Ntag"}, {"company": "Mydeo"}]
    };

    return Controller.extend("ui5con2019.controller.BaseController", {
        onInit(): void {
            const oModel: sap.ui.model.json.JSONModel = this.getView().getModel();
            const oUserMetaModel: sap.ui.model.json.JSONModel = this.getView().getModel("userMeta");

            oModel.setData(data);
            oUserMetaModel.setData(userMeta);

            this._loadAddNewItem();
        },

        _loadAddNewItem(): void {
            const oView: sap.ui.core.mvc.View = this.getView();

            Fragment.load({
                controller: this,
                id: oView.getId(),
                name: "ui5con2019.view.fragments.NewUserInfo",
                type: "XML",
            }).then((oNewUserFragment) => {
                const oGrid: sap.ui.layout.cssgrid.CSSGrid = oView.byId("gridLayout");

                oGrid.insertItem(oNewUserFragment, 0);
            });
        },

        handleNewItemPress(): void {
            let aData: object[];
            const oModel: sap.ui.model.json.JSONModel = this.getView().getModel();

            aData = JSON.parse(oModel.getJSON());
            // Create new container in "editable mode"
            aData.push({meta: {editable: true}});
            oModel.setData(aData);
        },

        handleItemEdit(): void {
            // ToDo: Make a copy of the data
            // ToDo: enter edit mode
        },

        handleItemCancel(): void {
            // ToDo: Restore data
        },

        handleItemSave(): void {
            // ToDo: Persist data (send backend request)
        },

        handleItemDelete(): void {
            // ToDo: remove item from models array and save
        },

        onChange() {
            const oModel = this.getView().getModel("zzz");

            oModel.loadData("/api/v2/zzz", oModel.getData(), true, "POST");
        },
    });
});
