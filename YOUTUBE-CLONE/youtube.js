const sidebar2=document.getElementById("side-bar2");
const video_box=document.querySelectorAll(".video-box");
const section1=document.getElementById("section1");
const section2=document.getElementById("section2");
const video_box2=document.getElementById("video-box2");
const cross_btn=document.getElementById("cross");
const short_video_wrapper=document.querySelector(".short-video-wrapper");
const user_ring=document.getElementById("user");
let user_div=document.getElementById("user_div");
let notification_div=document.getElementById("notification_div");
let notifications=document.getElementById("notifications");
let create=document.getElementById("create");
let create_div=document.getElementById("create_div");
let showMore1=document.getElementById("showMore1");
let showMore2=document.getElementById("showMore2");
let playList_div=document.getElementById("playList_div");
let subscriptions_div=document.getElementById("subscriptions_div");
let i=true;
let x=true;
let y=true;
showMore1.lastChild.textContent="Show More";
showMore2.lastChild.textContent="Show More";
section2.style.display="none";
// console.log(user_div.classList[1]);
wrapper=document.querySelector(".wrapper");
menu=document.getElementById("menu");
is_clicked=false;
menu.onclick=function (){
sidebar2.classList.toggle("check");
wrapper.classList.toggle("wrap_opacity");
wrapper.style.pointerEvent="none"
}
video_box.forEach(element => {
    element.onclick=function(){
        wrapper.classList.toggle("check");
        section2.style.display="";
        section2.classList.toggle("check");
    }
});
section2.onclick=function (){
    console.log(video_box2)
    wrapper.classList.toggle("check");
    section2.style.display="none";
}
//--------short-video-crossbar-----------
cross_btn.onclick=function (){
    if(i){
    short_video_wrapper.style.display="none";
    i=false; 
    }
    else{
    short_video_wrapper.style.display="";
    i=true;  
    }
}
// --------------User profile------------
user_ring.onclick=function (){
    user_div.classList.toggle("check")
}
////-----------Notification section-----------
notifications.onclick=function(){
    notification_div.classList.toggle("check")
}
//----------create section--------------
create.onclick=function(){
    create_div.classList.toggle("check")
}
showMore1.onclick=function(){
    if(x===true){
        playList_div.style.height="auto";
        showMore1.lastChild.textContent="Show Fewer"
        x=false;
    }
    else{
        playList_div.style.height="";
        showMore1.lastChild.textContent="Show More"
        x=true;
    }
}
showMore2.onclick=function(){
    if(y===true){
        subscriptions_div.style.height="auto";
        showMore2.lastChild.textContent="Show Fewer"
        y=false;
    }
    else{
        subscriptions_div.style.height="";
        showMore2.lastChild.textContent="Show More"
        y=true;
    }
}
// -------------ACTUAL YOUTUBE API FROM GOOGLE DEVELOPERS-------------
// let vid=`<iframe width="560" height="315" src="https://www.youtube.com/embed/${}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
// AIzaSyBP2H0594H1JvnSNas0oD2N3oTnxSrWcgQ
// let user_input=document.getElementById("user_input").value;
            let iframes=document.getElementsByTagName("iframe");
            let video_description_titles=document.querySelectorAll(".video_description_title");
            let channel_names=document.querySelectorAll(".channel_name");
            let views=document.querySelectorAll(".views");
            let upload_times=document.querySelectorAll(".upload_time");
            console.log(channel_names[3])
            const apiUrl=`https://www.googleapis.com/youtube/v3/search?key=AIzaSyBP2H0594H1JvnSNas0oD2N3oTnxSrWcgQ&channelId=&part=snippet,id&order=date&maxResults=12`
            // const apiUrl=`https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyBP2H0594H1JvnSNas0oD2N3oTnxSrWcgQ
            // &part=snippet,contentDetails,statistics,status`;
            async function GetDetails(){
                const response=await fetch(apiUrl);
                var data=await response.json();
                console.log(iframes);
                for(let i=0;i<data.items.length;i++){
                    iframes[i].src=`https://www.youtube.com/embed/${data.items[i].id.videoId}`;
                    video_description_titles[i].innerText = data.items[i].snippet.description;
                    channel_names[i].innerText = data.items[i].snippet.channelTitle;
                    // console.log(data.items[i].id.videoId)
                    // console.log(`<iframe width="560" height="315" src="https://www.youtube.com/embed/${data.items[i].id.videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`)
                }
            }
            GetDetails();


            // let iframes=document.getElementsByTagName("iframe")
            // const apiUrl=`https://youtube-v3-alternative.p.rapidapi.com/search&video?id=dQw4w9WgXcQ?key=e7a98226eamshefb27e55974dcfdp142ca3jsnefddd1f20552&Result=25`;
            // async function GetDetails(){
            //     const response=await fetch(apiUrl);
            //     var data=await response.json();
            //     console.log(data);
            //     // console.log(data.items);
            //     // for(let i=0;i<data.items.length;i++){
            //     //     iframes[i].src=`https://www.youtube.com/embed/${data.items[i].id.videoId}`
            //     //     // console.log(data.items[i].id.videoId)
            //     //     // console.log(`<iframe width="560" height="315" src="https://www.youtube.com/embed/${data.items[i].id.videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`)
            //     // }
            // }
            // GetDetails();



// let iframes=document.getElementsByTagName("iframe");
// console.log(iframes.length)
// async function GetDetails(){
//     const url = 'https://youtube-v31.p.rapidapi.com/captions?part=snippet&videoId=M7FIvfx5J10';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'e7a98226eamshefb27e55974dcfdp142ca3jsnefddd1f20552',
// 		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.json();
//     for(let i=0;i<iframes.length;i++){
//         iframes[i].src=`https://www.youtube.com/watch?v=${result.items[0].snippet.videoId}&t=1s`;
//     };
// 	console.log(result.items[0].snippet.videoId);
// } catch (error) {
// 	console.error(error);
// }
// }
// GetDetails()







// -----------------------------------------------------------------------------
// ================================================================================
/**
 * This sample subscribes the active user to the GoogleDevelopers
 * YouTube channel, specified by the channelId.
 */
// function addSubscription() {
//     // Replace this channel ID with the channel ID you want to subscribe to
//     var channelId = 'UC9gFih9rw0zNCK3ZtoKQQyA';
//     var resource = {
//       snippet: {
//         resourceId: {
//           kind: 'youtube#channel',
//           channelId: channelId
//         }
//       }
//     };
  
//     try {
//       var response = YouTube.Subscriptions.insert(resource, 'snippet');
//       console.log(response);
//     } catch (e) {
//       if(e.message.match('subscriptionDuplicate')) {
//         console.log('Cannot subscribe; already subscribed to channel: ' + channelId);
//       } else {
//         console.log('Error adding subscription: ' + e.message);
//       }
//     }
//   }
//   addSubscription()