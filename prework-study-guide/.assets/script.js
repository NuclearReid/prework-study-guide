var topics = [`HTML`, `CSS`, `Git`,`JavaScript`];

var topic;

var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
    for(var x = 0; x < topics.length;x++)
    {
        console.log(topics[x]);
    }
}

topic = randomTopic;

function selectTopic(){
    if (topic === 'HTML') {
        console.log("Let's study HTML!");
      } else if (topic === 'CSS') {
        console.log("Let's study CSS!");
      } else if (topic === 'Git') {
        console.log("Let's study Git!");
      } else if (topic === 'JavaScript') {
        console.log("Let's study JavaScript!");
      } else {
        console.log('Please try again!');
      }
}
console.log('Here are the topics we have learned');
listTopics();
console.log('here is a random one');
selectTopic(topic);