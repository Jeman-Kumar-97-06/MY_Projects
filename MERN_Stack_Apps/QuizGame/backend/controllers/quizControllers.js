const Quest = require('../models/quizModel');
const mong  = require('mongoose');
require('dotenv').config();

//Function to shuffle [correct ans,...incorrect ans'];
function shuffle(array) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }

const getQuestions = async (req,res) => {
    const question_api = await fetch(process.env.APIURL);
    const json         = await question_api.json();
    if(json.response_code===0){
        const deleted = await Quest.deleteMany({score:0});
        const raw_dat      = json.results;
        raw_dat.forEach(element => {
            let all_ans = [...element.incorrect_answers,element.correct_answer];
            shuffle(all_ans);
            delete element.incorrect_answers;
            element.all_answers  = all_ans;
            element.given_answer = [];
        });
        const new_ques_set = await Quest.create({queslist:json.results,score:0});
        return res.status(200).json(new_ques_set);
    }
    else if (json.response_code!==0){
        console.log("No questions! Try Again after sometime")
    }
}

const updateScore = async (req,res) => {
    const {id} = req.params;
    if (!mongoose.Types.Object.isValid(id)){
        return res.status(404).json({error:"The ID is Invalid!"})
    }
    const updated_score = await Quest.findOneAndUpdate({_id:id},{...req.body});
    if (!updated_score){
        return res.status(404).json({error:"No match found with the specified ID"});
    }
    res.status(200).json(updated_score);
}

module.exports = {getQuestions,updateScore};