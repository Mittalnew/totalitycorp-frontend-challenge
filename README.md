# totalitycorp-frontend-challenge
This is LinkedIn clone project and it is responsive for desktop and mobile . this project i am using react, JavaScript, CSS, html.  To see the website please visit  https://linkedinpro-30b01.web.app/                    

# Linkedin home clone

i am using React JS,
 Firebase & Styled-Components. and also I used mui to pick up the icon.
 this project is responsive for mobile and desktop.Please visit site https://linkedinpro-30b01.web.app/


## Features

- navbar and footer present
- click/hover on butttons
- Fullscreen mode
- mobile screen mode


## How to build
1. Install all the dependencies
2. Setup Firebase
3. Let's build the optimized version
4. Now for hosting on Firebase lets config Firebase locally
5. Let's deploy our clone and make it live
6. Please visit site https://linkedinpro-30b01.web.app/
## My Approach to create this project-
1. first i will give overview I first made the code for desktop and then 
made it mobile responsive by giving media quary.

## Left Header Section-(image and search bar);

2. First I made the left part of the header, and the right part of the header was also made.In the left part of the header, I inserted the URL for the LinkedIn logo class.similerly in search section.

 3. I got the search icon from mui, Installed mui's libraryso that we can get icons.Libre installation details can be seen in package.json.

 4. To get any icon, will take the link of the icon in mui and import it and close it with self tag in same component.

 5. NOTE- Whatever component you create, will import it into app.js and will also self tag it.

 6. Now we will CSS the search and image URL.Will also import the css folder into the header component.

 ## Right Header Options-

 1. first i did create headeroptions.js component with class header_options.

 2. will insert the header options into the self tag in header.js and also import.In the header options, icons and name is differnt, then we will pass props in it, props act as a property in react. If we want the home icon, then we will take the link from mui and import it in the header.js, Give a class to the div and self-close the home tag.
     now Will pass the icon and title in the headersoptions, then call the icons and give the title in the span tag.Now let's call the headeroptions in header.js as many icons as you want.Whatever icon is needed, it will self-close the import number like it did earlier.

 3. Will call AccountCircleIcon like this and import it and insert in header_options. Now we will CSS them.css will also be done in the header.

 ## Left sidebar section-

 1.  Sidebar.js will create.makes sidebar_profile class and give it the url for background image.Will also import the sidebar into app.js . create profile detail class name to introduce profile details. than create css file and import in sidbar.js and makes css. same as privious import the AccountCircleIcon and set self tag to create profile icon.

 **** PROFILE_STATS

 2. Profile viewd and Grow Network will be created by giving class. now start the css in the sidebar.css portion.

 3. noe it will amke sidebar_recent class to create p ans span in html,css, js, react. than start the css in sidbar.js.

 ## Feed section (search,photo, video, event, artical)-

 1. Will create a file of feed.js and create a class by giving a div which will be feed_input. Will import first AccountCircleIcon for profile icon and all the AccountCircleIcon.than next create the form to write the post in the post icon.
      than import the feed in the app.js component.

 2. now work on the feed_options, first create the div, class name feed_options and agin create dic and class name option and import icon from mui to feed.js and set self close tag.
    similary fetch tha all icons from mui and import and get the all icons . next imort the css and make the css.   

    ## post.js component-

  1. i create the post.js file . will turn the div to the left and make its class name Post_HeaderLeft and Next class HeaderRight .In this we will import AccountCircleIcon with sell tag .
      Post_profile_detail class will makes and will give details of sender in it.   

  2. now call the post in the feed section because so that the details and AccountCircleIcon come in the post section.

  3. morevore icone import from mui and set the self close the post component.

  4. now import the post.css and start the css of post.js.

  5. Will make the post_body class and write some posts in it.

  6. will make the post_footer and create the div and set classname post footer option. To get similar icons, will take a link from mui import it and tag it and close the name of the icon with a self tag.
       and set the css in the post section.now in the feed section copy the post self tag so many time.

     ## Widget.js component-

  1. first import the widget in the app.js with self closing tag. and also import widget.css in the widget.js section.    

  2. first import the infi icon from mui to widget.js and set the self closing tag.  

  3. will make the widget_header and takes h4 tag (linkedin news) ,and next div widget body and widget options takes li, h4, p tags and copy 3 to 4 times.

  4. create the css in the widget.css to make the perfect widget section.

  ## Footer Section( INSIDE Widget.js) -

  1. simply create the div and get the class name footer_distance and i will takes ancer tag to all heading becouse Hover like all headlins links.
      After that we tightened all the links.

   #Media quary (413px) for mobile responsive - 

 CSS all the components on this pixel and I got a responsive clone.
    In this way the clone project is done.

THANKYOU-
    Please visit site https://linkedinpro-30b01.web.app/
