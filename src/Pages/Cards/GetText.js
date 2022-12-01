export const getText = (index1, index2) => {

    if (index1 == 0) {
        if (index2 == 0) {
            return <div className='popup-text'>This website was written using anime.js for the cool grid animation at the beginning, and ReactJS for the main framework of the website! <br/>This website only took me 3 days to create with a total time of 20 hours including photoshopping images, writing text and coding. <br/><a target="_blank" href="">Click here to view the code!</a></div> 
        }
        if (index2 == 1) {
            return  <div className='popup-text'>A custom blog made using React.JS and a local JSON server to store the blog information.<br/><a href="https://github.com/expely/Dojo-Blog">Click here to view the code!</a></div>
        }
        if (index2 == 2) {
            return <div className='popup-text'>Google Firebase is a database that I have countless hours in. <br/>Between some personal projects not listed on here, to the chatting App in the first card!</div>
        }
        if (index2 == 3) {
            return <div className='popup-text'>I created a chatting app that allows users to sign in through their google account and chat with others on a text channel!<br/>Using google firebase to authenticate users and to store messages.<br/><a target="_blank" href="https://github.com/expely/Messenger-App">Click here to view the code!</a></div>
        }
    }
    if (index1 == 1) {
        if (index2 == 0) {
            return <div className='popup-text'>When developing the android app for my father, I used DynamoDB to store all of the URL information for the pictures.<br/> similar to Google Firebase, but working with Amazon instead.</div>
        }
        if (index2 == 1) {
            return <div className='popup-text'>Whilst developing software for a laboratory information management system, and a cloud engineering apprenticeship I used a docker quite frequently. <br/>Super helpful for when sharing code with others through a virtual machine! </div>
        }
        if (index2 == 2) {
            return <div className='popup-text'>Another thing I used quite frequently in the Android application for my father. I would make API calls to Facebook’s graph API and to the Amazon AWS DynamoDB to get or post information.</div>
        }
        if (index2 == 3) {
            return <div className='popup-text'>Laboratory Information Management System (or LIMS) is what I’ve developed for an asbestos testing laboratory. <br/>It keeps track of all of their information (ie: Batch Numbers, Samples, Companies, etc.). </div>
        }
    }
    if (index1 == 2) {
        if (index2 == 0) {
            return <div className='popup-text'>I worked directly with the Facebook app Graph API to make calls to get all of the user’s Facebook profile pictures. At which point I would send it to an Amazon AWS database to be stored and displayed to the user.</div>
        }
        if (index2 == 1) {
            return <div className='popup-text'>I wanted to do something cool for Father’s day. So I decided that I would build my father an Android app. It would let him login to his Facebook account where it would grab all of his profile pictures. At which point it would upload them to an Amazon AWS database for users to rank them.<br/><a target="_blank" href="https://github.com/expely/Rate-Jesses-PFP">Click here to view the code!</a></div>
        }
        if (index2 == 2) {
            return <div className='popup-text'>A big part of building the Spacestation Gaming Stat Tracker was parsing HTML. So I used jsoup to parse the HTML and get all of the data for the users.</div>
        }
        if (index2 == 3) {
            return <div className='popup-text'>Spacestation Gaming is my local Esports team that I wanted to show appreciation for. So I made an Android app that allows users to look at and track the stats of their players. <br/><a href="https://play.google.com/store/apps/details?id=com.partybus.ssgfinal" target="_blank">Check it out! </a> <br/><a target="_blank" href="https://github.com/expely/Android_SSGTracker">Click here to view the code!</a></div>
        }
    }
    if (index1 == 3) {
        if (index2 == 0) {
            return <div className='popup-text'>This page shows off one of the coolest designs I made for the book. <br/>Using Adobe Photoshop I labeled everything in the hotbar.</div>
        }
        if (index2 == 1) {
            return <div className='popup-text'>This page shows off an example of a table I made with custom images I got for the book. The combined mob I had to photoshop by hand.</div>
        }
        if (index2 == 2) {
            return <div className='popup-text'>This page shows off some of the writing I used to describe in depth the kind of things you can find inside of a bastion in Minecraft.</div>
        }
        if (index2 == 3) {
            return <div className='popup-text'>I published this book in the summer of 2022 along with my father and younger brother (though 95% of the book was written by me). <br/>I worked directly with The Wiley Company to create a book about my favorite game of all time! <br/><a href="https://www.wiley.com/en-us/Minecraft+Basics+For+Dummies-p-9781119907480" target="_blank">Check it out! </a></div>
        }
    }
    if (index1 == 4) {
        if (index2 == 0) {
            return <div className='popup-text'>Me (right), my Dad (left), and my younger brother (middle) posing after getting the go-ahead to write Minecraft Basics for Dummies.</div>
        }
        if (index2 == 1) {
            return <div className='popup-text'>A picture from the beautiful Dinosaur National Park!</div>
        }
        if (index2 == 2) {
            return <div className='popup-text'>Playing Music since I was 4 years old, and started playing percussion when I was in 4th grade. <br/>I’ve played with the Utah Philharmonic Orchestra, and my college orchestra. <br/>My senior year of high-school I won the spot to be the sterling scholar of instrumental music for my school. </div>
        }
        if (index2 == 3) {
            return <div className='popup-text'>I am a full-stack developer with 6 programming languages under my belt! <br/>With beautiful frontend skills, and deadly backend, I‘ve done it all! From web design to devOps to Android development!</div>
        }
    }
}