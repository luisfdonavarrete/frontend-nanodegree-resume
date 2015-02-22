var bio = {
    "name": "Luis Fernando Navarrete Neira",
    "role": "Web Developer",
    "contacts": {
        "mobile": "867-333-9356",
        "email": "luis.na06@gmail.com",
        "github": "luisfdonavarrete",
        "twitter": "@LuisNa06",
        "location": "Whitehorse, YT, Canada"
    },
    "welcomeMessage": "Hello",
    "skills": [
        "HTML/CSS",
        "Javascript",
        "PHP",
        "jQuery"
    ],
    "biopic": "images/me.jpg",
    "display": function () {
        var self = this;
        var formattedName = HTMLheaderName.replace("%data%", this.name);
        var formattedRole = HTMLheaderRole.replace("%data%", this.role);
        Object.keys(this.contacts).forEach(function (item) {
            var formattedContact = eval("HTML" + item).replace("%data%", self.contacts[item]);
            $('#topContacts').append(formattedContact);
            $('#footerContacts').append(formattedContact);
        });
        var formattedPicture = HTMLbioPic.replace("%data%", this.biopic);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", this.welcomeMessage);
        $("#header").append(formattedWelcomeMessage);
        $("#header").append(formattedPicture);
        $("#header").append(HTMLskillsStart);
        this.skills.forEach(function (item) {
            var formattedSkill = HTMLskills.replace("%data%", item);
            $("#skills").append(formattedSkill);
        });
    }
};

var education = {
    "schools": [
        {
            "name": "Salesian Polytechnic University",
            "location": "Quito, Ecuador",
            "degree": "Systems Engineering",
            "majors": ["CS"],
            "dates": 2015,
            url: "http://www.ups.edu.ec/"
        }
    ],
    onlineCourses: [
        {
            "title": "JavaScript Road Trip Part 1",
            "school": "Code School",
            "date": 2014,
            "url": "https://www.codeschool.com/courses/javascript-road-trip-part-1"
        },
        {
            "title": "JavaScript Road Trip Part 2",
            "school": "Code School",
            "date": 2014,
            "url": "https://www.codeschool.com/courses/javascript-road-trip-part-2"
        },
        {
            "title": "JavaScript Road Trip Part 3",
            "school": "Code School",
            "date": 2014,
            "url": "https://www.codeschool.com/courses/javascript-road-trip-part-3"
        },
        {
            "title": "Git Real",
            "school": "Code School",
            "date": 2015,
            "url": "https://www.codeschool.com/courses/git-real"
        },        
        {
            "title": "CSS Cross-Country",
            "school": "Code School",
            "date": 2014,
            "url": "https://www.codeschool.com/courses/css-cross-country"
        },
        {
            "title": "Blasting Off With Bootstrap",
            "school": "Code School",
            "date": 2014,
            "url": "https://www.codeschool.com/courses/blasting-off-with-bootstrap"
        }
    ],
    "display": function () {
        this.schools.forEach(function (school) {
            $("#education").append(HTMLschoolStart);
            var formattedName = HTMLschoolName.replace("%data%", school.name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
            $(".education-entry:last").append(formattedName + formattedDegree);
            var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
            $(".education-entry:last").append(formattedDates);
            var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
            $(".education-entry:last").append(formattedLocation);
            var formattedMajors = HTMLschoolMajor.replace("%data%", school.majors.join(", "));
            $(".education-entry:last").append(formattedMajors);
        });
        $("#education").append(HTMLonlineClasses);
        this.onlineCourses.forEach(function (course) {
            $("#education").append(HTMLschoolStart);
            var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
            var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
            $(".education-entry:last").append(formattedTitle + formattedSchool);
            var formattedDates = HTMLonlineDates.replace("%data%", course.date);
            $(".education-entry:last").append(formattedDates);
            var formattedURL = HTMLonlineURL.replace("%data%", course.url);
            $(".education-entry:last").append(formattedURL);
        });
    }
};

var work = {
    "jobs": [
        {
            "employer": "Computer for School Yukon",
            "title": "Computer Technitian",
            "location": "Whitehorse, YT, Canada",
            "dates": "Septiembre 2014 - February 2015",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet metus odio. Nam tortor sapien, sodales vitae malesuada eget, elementum vel ipsum. Sed varius tempus ligula, et vehicula nunc tempor ut. Sed finibus interdum quam vitae vestibulum. Curabitur tristique urna vitae nibh pulvinar mattis."
        },
        {
            "employer": "Misiva",
            "title": "Web Developer",
            "location": "Quito, Ecuador",
            "dates": "April 2012 - June 2014",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet metus odio. Nam tortor sapien, sodales vitae malesuada eget, elementum vel ipsum. Sed varius tempus ligula, et vehicula nunc tempor ut. Sed finibus interdum quam vitae vestibulum. Curabitur tristique urna vitae nibh pulvinar mattis."
        },
        {
            "employer": "Zeeuz Customer Attendance",
            "title": "Web Developer",
            "location": "Quito, Ecuador",
            "dates": "September 2011 - March 2012",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet metus odio. Nam tortor sapien, sodales vitae malesuada eget, elementum vel ipsum. Sed varius tempus ligula, et vehicula nunc tempor ut. Sed finibus interdum quam vitae vestibulum. Curabitur tristique urna vitae nibh pulvinar mattis."
        }
    ],
    "display": function () {
        this.jobs.forEach(function (item) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", item.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", item.title);
            $(".work-entry:last").append(formattedEmployer + formattedTitle);
            var formattedDates = HTMLworkDates.replace("%data%", item.dates);
            $(".work-entry:last").append(formattedDates);
            var formattedLocation = HTMLworkLocation.replace("%data%", item.location);
            $(".work-entry:last").append(formattedLocation);
            var formattedDescription = HTMLworkDescription.replace("%data%", item.description);
            $(".work-entry:last").append(formattedDescription);
        });
        $("#mapDiv").append(googleMap);
    }
};

var projects = {
    "projects": [
        {
            "title": "Smaple Project 1",
            "dates": 2015,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet metus odio. Nam tortor sapien, sodales vitae malesuada eget, elementum vel ipsum. Sed varius tempus ligula, et vehicula nunc tempor ut. Sed finibus interdum quam vitae vestibulum. Curabitur tristique urna vitae nibh pulvinar mattis.",
            "images": [
                "images/197x148.gif",
                "images/197x148.gif",
                "images/197x148.gif"
            ]
        }
    ],
    "display": function () {
        var self = this;
        this.projects.forEach(function (item) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", item.title);
            $(".project-entry:last").append(formattedTitle);
            var formattedDate = HTMLprojectDates.replace("%data%", item.dates);
            $(".project-entry:last").append(formattedDate);
            var formattedDescription = HTMLprojectDescription.replace("%data%", item.description);
            $(".project-entry:last").append(formattedDescription);
            item.images.forEach(function (image) {
                var formattedImage = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").append(formattedImage);
            });
        });
    }
};

(function () {
    bio.display();
    work.display();
    projects.display();
    education.display();
    initializeMap();
})();