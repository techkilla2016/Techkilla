"use client"
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import axios from 'axios';
import 'react-chat-widget/lib/styles.css';
const DynamicWidget = dynamic(() => import('react-chat-widget').then(mod => mod.Widget), {
  ssr: false,
});

function ChatBoat() {

  var addLinkSnippet;
  var addResponseMessage;

  var json = {
    "data": [
      {
        "Sr. No.": 1,
        "Query": "Logo Reveal",
        "Answers": "It's like unveiling an entirely new service or product when a brand's logo is revealed to the public. To present it in front of the crowd must be a special approach to generate enthusiasm and vigour. Here are some suggestions for how to reveal a logo at an event:\n\n1. Utilising a slingshot\n2. Excitator\n3. Projectional mapping\n4. Holographic images\n\nView our most recent logo unveiling work for well-known firms here."
      },
      {
        "Sr. No.": 2,
        "Query": "Product Launch",
        "Answers": "Any company's product launch is comparable to welcoming a new baby into the family. Your audience is equally interested in seeing what innovations you will offer to the world and how you will solve problems. One must conduct multi-channel marketing campaigns, such as those that target both online and offline audiences, in order to launch a product.\n\nIn order to target online Techkilla offers some creative ideas on how to host a product luanch. A select sample of them are listed below:\n1. Online advertisements\n2. Virtual event that provides satisfaction\n3. Playing games using newly announced products\n\nOffline activities\n\n1. A booth at an exhibition\n2. A ballroom gathering with designated audiences and expenses"
      },
      {
        "Sr. No.": 3,
        "Query": "Trade show",
        "Answers": "Trade fairs are intended to attract a large number of attendees because they are open to anyone. As there are no legitimate entry restrictions, you can target new customers for your goods and services.\nWhen you reserve a space at a trade fair, you may simultaneously target your audience.\nRenting a booth and targeting is one thing, but engaging customers with your business requires deeper level solutions.\n\nYou can easily resolve your issues with techkilla because we have assisted numerous brands in attracting their target audience and bystanders to the stall with the aid of our cutting-edge and captivating omnidirectional technology solution, including gaming, touch-based, sensory operated, and many more."
      },
      {
        "Sr. No.": 4,
        "Query": "photobooth",
        "Answers": "Although picture booths have been around for a while, their applications vary depending on the occasion. A photobooth is a simple solution that may capture your brand, the attention of your audience, memories, and can be offered as a memento in the form of a printed copy or digitally via Whatsapp or other platforms.\n\nWe provide a variety of photo booth solutions to meet your needs.\n1. A 360-degree or spinner booth\n2. Digital photography booth\n3. an AR booth\n4. A mosaic-covered booth\n5. Photo booth with a word cloud\nGIF picture booth, no.\nIpad photo booth, no. 7"
      },
      {
        "Sr. No.": 5,
        "Query": "Digital Photobooth",
        "Answers": "Attendees can preserve their event memories with the use of photos, which keeps the experiences fresh in their thoughts and encourages them to come back year after year. They may also be an effective means of promoting your event.\n\nAttendees can quickly take photos with personalised event frames using Techkilla's digital photo booth. With the photo booth, you can\n\nEmphasize the unique elements of your event.\nPromote event sponsors by encouraging participants to share branded content\nMake memories that will entice guests to return.\n\nWe design your custom digital photo booth that works on any browser so you can reach your audience from the comfort of their own homes and invite them to participate virtually in your brand event by taking individual or group selfies and posting them with a single click to social media.\n\nSee a few of our most recent digital photo booth delivery."
      },
      {
        "Sr. No.": 6,
        "Query": "360 photobooth",
        "Answers": "A very popular addition at both formal and casual occasions is the 360-degree photo booth. Increase the amount of glittery film and improve your guests' self-confidence. By choosing to rent a 360-degree photo booth, you can give them a special moment where they are the centre of attention.\n\nInside the booth, the users must stand on a platform that is coupled to a revolving camera arm. The mobile camera spins 360 degrees and records a 10- to 15-second video of the visitors from all angles. After that, the clip can be altered to add numerous effects, including slow motion and background music.\n\ncheck our recent 360 photo or spin booth installations for popular brands"
      },
      {
        "Sr. No.": 7,
        "Query": "AR photobooth",
        "Answers": "AR or augmented reality photo booth is a unique and magical experience for everyone. It takes existing video and fully replaces the background, or it can superimpose an outer layer of a frame or design with your company's logo.\n\nThe distinctive feature of AR photo booths is that they can entirely be operated by hand motions like pinching, swiping, and pushing.\n\nSee the installations of our most popular augmented reality photo booths."
      },
      {
        "Sr. No.": 8,
        "Query": "VR games",
        "Answers": "Virtual reality, also known as VR, has evolved into a full-fledged technological invention that can entirely transport someone into a different environment using a head gear independently. The areas can take a user on a virtual tour of a location or simply set them in a gaming area where they can play, discover, and be astonished while bringing back many memories to share with their peers.\n\nHere are a few of the distinctive VR games Techkilla has to offer for your next gaming installation."
      },
      {
        "Sr. No.": 9,
        "Query": "VR 360 tour",
        "Answers": "Virtual reality (VR) or 360-degree tours can provide a consumer with a full travelling experience without even leaving their home. It can address many of your challenges as a brand where you need to use the user's imagination at every turn.\nA customised environment with clickable locations in the VR 360 tour is available to you for delivering educational content about the locale.\n\nHere are some stunning examples of our VR 360 tours for your perusal."
      },
      {
        "Sr. No.": 10,
        "Query": "QR based registration",
        "Answers": "QR-based registration is a distinct and secure method of enrolling participants in an event and providing them with a verified entry at the event.\n\nHow does it function?\nWith Techkillas' automatic QR registration software, you can set up an automated emailing feature and create individual QR codes for each participant. To manage the small details of your event, that require no more manpower.\nSet up a backend app that scans the QR code and sends an acknowledgement of the verification along with a backend check update in the database so that all email addresses can get QR codes.\nWith the help of our special instant ID generator tool, you may generate instant IDs to hand out to participants at the moment of admission."
      }
    ]
  }

  const checkKeyword = (sentance) => {
    var results = [];
    var keywords = json.data;

    for (var i = 0; i < keywords.length; i++) {
      var keyword = keywords[i].Query;
      var _sentance = sentance;

      if (_sentance.length < keyword.length) {
        var temp = keyword;
        keyword = _sentance;
        _sentance = temp;
      }

      var keyword_array = keyword.split(" ");

      var matched = 0;
      var total = keyword_array.length;

      for (var j = 0; j < total; j++) {
        var _keyword = keyword_array[j];
        if (_sentance.toLowerCase().indexOf(_keyword.toLocaleLowerCase()) >= 0) {
          matched++;
        }
      }

      results.push({ query: keywords[i].Query, answer: keywords[i].Answers, percentage: Math.round((matched / total) * 100) });
      //keywords[i].percentage = (Math.round((matched/total)*100));
    }

    results.sort(function (a, b) { return b.percentage - a.percentage });

    return results;
  }

  useEffect(async () => {

    addLinkSnippet = (await import('react-chat-widget')).addLinkSnippet;
    addResponseMessage = (await import('react-chat-widget')).addResponseMessage;

    addResponseMessage("Hello i am Yuvaan . I am here to help you. How may i assist you ?");

    setTimeout(async () => {
      if (!(await import('react-chat-widget')).isWidgetOpened())
        (await import('react-chat-widget')).toggleWidget();
    }, 2000);

  }, []);


  const handleNewUserMessage = (newMessage) => {
    //    ((await import('react-chat-widget')).addResponseMessage("Hello"))

    var result = checkKeyword(newMessage)[0];
    var query = "";

    if (result.percentage != 0) {
      addResponseMessage(result.answer);
      addLinkSnippet({ title: "Looking for more info? Connect with us and our team of experts will help with all your queries", link: "https://wa.me/917827362702?text=" + newMessage, target: "_blank" });

    } else {
      axios.post("https://techkilla-chat-server.onrender.com/chat", { token: "b4784706-f357-11ed-a05b-0242ac120003", prompt: newMessage })
        .then(async (res) => {
          addResponseMessage(res.data);
          addLinkSnippet({ title: "Looking for more info? Connect with us and our team of experts will help with all your queries", link: "https://wa.me/917827362702?text=" + newMessage, target: "_blank" });

          // console.log(res);
        })
        .catch((err) => {
          console.log("error");
        })
    }

  }

  return (
    <div>
      <DynamicWidget
        title="TechKilla's New AI"
        subtitle="Welcome"
        senderPlaceHolder="Type your query here"
        handleNewUserMessage={handleNewUserMessage} />
    </div>
  );
}

export default ChatBoat;
