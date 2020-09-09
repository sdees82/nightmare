'use strict';




function AboutController(aboutFactory){
    var vm = this;
    vm.story = aboutFactory.getStory();
    }
    
    


function aboutFactory(){
var story = [{
    story: "My story began when I was 24 years old."
},{
    story:   "I had a really nice apartment, a brand new car and a job in manufacturing. I made 50K a year and I was doing exactly what I thought I was supposed to do; exactly what my parents had done with their lives. I thought I was set."
},{
    story: "Then, my world completely changed."
},{
    story: "The plant that I was working at closed down and I was laid off indefinitely… just a few short weeks later  I found out that I was pregnant with my first child. "
},{
    story: "So there I was, pregnant and unemployed."
},{
    story: "I reached out to the Department of Human Services and asked for Medicaid to pay for my doctor’s visits and the birth of my son."
},{
    story: "At the time, I was engaged to the father of my child (my now husband) and because we lived together and my fiance made a living wage, I did not qualify for the low-income bracket."
},{
    story: "I realized that the only way I would receive help was if my fiance and I separated and I filed for child support."
},{
    story: "That just didn’t sit right with me. I had done everything I believed to be the right way. I graduated high school, I got a job, worked hard, fell in love and was going to start a family with the father of my child and now DHS was telling me the only way they’d help me was if I left my partner."
},{
    story: "So, the months went on and my mind continued to race."
},{
    story: "There had to be a better way."
},{
    story: "And I knew I wasn’t alone."
},{
    story: "The women that I had talked to at the DHS were all in turmoil. Food stamps were being reduced, assistance was not being provided. We were all trying, but we just needed more."
},{
    story: "I thought about all the people I knew who were apart of generational dependency on government assistance. Why was it so hard to break the cycle? What was the missing piece of the puzzle?"
},{
    story: "I kept coming back to one idea: support."
},{
    story: "Although I had the support of my family, it was embarrassing to ask them for help with groceries or simple household necessities.  I can vividly remember the look on their faces; the disappointment and how powerless I felt in those moments. I remember thinking regularly, I was always so independent, how did I get here..."
},{
    story: " I could only imagine how those who didn’t at least have the support of family got through"
},{
    story: "Something had to be done, I just didn’t know what or how at that time"
},{
    story: "For me, it took a lot of soul searching, research and prayer, but my husband and I were able to figure a way out. We both enrolled in college and with a lot of hard work, I landed myself a career that was able to put me back on the path I wanted to be on…But I couldn’t get those other families out of my head."
},{
    story: "God had shown me the way out of my situation and I truly believe he is giving me the chance to help others break the cycle.  He spoke to me in ways I couldn’t ignore."
},{
    story: "Without really knowing how it would all work out, I registered, “Parents Have Dreams,” as a nonprofit organization and committed to finding a way to support parents, in turn supporting their children and the generations to follow."
},{
    story: "The main focus of Parents Have Dreams (PhD) is to reprogram the way lower-middle class and low-income parents think in regards to finances and the opportunities available to them in general."
}];

var factory = {};
factory.getStory = function(){
    return story;
};

return factory;


    
}

angular.module('app')
        .controller('AboutController', AboutController)
        .factory('aboutFactory', aboutFactory);