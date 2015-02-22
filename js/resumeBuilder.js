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

function iniziatileGraph() {
        $("#workExperience").append(HTMLgraphWorkTitle);
        $("#workExperience").append(HTMLgraphSVG);
        var WIDHT = 960;
        var HEIGHT = 200;
        var PADDING = 20;
        var BAR_HEIGHT = 2;
        var TWO_TIMES_PADDING = PADDING * 2;

        var colorPalette = d3.scale.category20();
        var colorScale = d3.scale.ordinal()
            .range(colorPalette.range());
        
        function stringToDate(stringDate){
            return new Date(stringDate.trim().replace(" ", ", "));
        }

        function buildPoints(starDate, endDate) {
            return [
                {x: starDate, y: BAR_HEIGHT},
                {x: endDate, y: BAR_HEIGHT},
                {x: endDate, y: 0},
                {x: starDate, y: 0},
                {x: starDate, y: BAR_HEIGHT}
            ];
        }

        var dataSet = buildDataSet(work.jobs);

        var xDomain = d3.extent(d3.merge(dataSet), function (d) {
            return d.x
        });

        var yDomain = d3.extent(d3.merge(dataSet), function (d) {
            return d.y
        });

        var xScale = d3.time.scale()
            .range([PADDING, WIDHT - TWO_TIMES_PADDING])
            .domain(d3.extent(xDomain));

        var yScale = d3.scale.linear()
            .range([HEIGHT - PADDING, PADDING])
            .domain([0, 10]);

        var xAxis = d3.svg.axis()
            .scale(xScale)
            .orient("bottom");

        var yAxis = d3.svg.axis()
            .scale(yScale)
            .ticks(5)
            .orient("left");

        function buildDataSet(jobs) {
            var data = [];
            jobs.forEach(function (job) {
                var date = job.dates.split("-");
                date = date.map(stringToDate);
                data.push(buildPoints(date[0], date[1]));
            });
            return data;
        }

        var svg = d3.select(".graph-work")
            .append("svg")
            .attr("width", WIDHT)
            .attr("height", HEIGHT);
    
        var foreingObject = svg
            .append("foreignObject")
            .attr("class", "foreign-object")
            .attr("width", 200)
            .attr("height", 50); 
    
        foreingObject.append("xhtml:body")
            .style("margin", 0)
            .style("padding", 0);

        $(".foreign-object body").append(HTMLtoolTip);
        
        var toolTip= d3.select(".tooltip");

        var pathContainers = svg.selectAll('g.line')
            .data(dataSet);

        pathContainers.enter().append('g')
            .attr("style", function (d, i) {
                return "fill: " + colorScale(i);
            });

        pathContainers.selectAll('path')
            .data(function (d) {
                return [d];
            })
            .enter().append('path')
                .attr("class", "job")
                .attr("d", d3.svg.line()
                    .x(function (d) {
                        return xScale(d.x);
                    })
                    .y(function (d) {
                        return yScale(d.y);
                    })
                    .interpolate("lineal")
                );

        svg.selectAll(".job")
            .data(work.jobs)
            .on("mouseover", function (d) {
                mouseover(d);
            })
            .on("mouseout", mouseout);
    
        function mouseout(d){
            toolTip.transition()
                    .duration(500)
                    .style("opacity", 0);
        }
        
        function mouseover(d) {
             foreingObject
                 .attr("x", function () {
                     return xScale(stringToDate(d.dates.split("-")[0]));
                 })
                 .attr("y", yScale(BAR_HEIGHT * 4));
            var toolTipText = d.employer + "<br>" + d.location + "<br>" + d.dates;
            $(".tooltip-inner").html(HTMLtoolTipText);
            $(".tooltip-text").html(toolTipText);
            
             toolTip.transition()
                 .duration(500)
                 .style("opacity", 1);
         }
        svg.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(0," + (HEIGHT - PADDING) + ")")
            .call(xAxis);
    }

(function () {
    bio.display();
    work.display();
    projects.display();
    education.display();
    initializeMap();
    iniziatileGraph();
})();