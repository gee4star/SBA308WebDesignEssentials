// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];

//   function getLearnerData(course, ag, submissions) {
//     // here, we would process this data to achieve the desired result.
//     const result = [
//       {
//         id: 125,
//         avg: 0.985, // (47 + 150) / (50 + 150)
//         1: 0.94, // 47 / 50
//         2: 1.0 // 150 / 150
//       },
//       {
//         id: 132,
//         avg: 0.82, // (39 + 125) / (50 + 150)
//         1: 0.78, // 39 / 50
//         2: 0.833 // late: (140 - 15) / 150
//       }
//     ]; 

//     return result;
//   } 

//   const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

//   console.log(result);

function getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions){
    //If an AssignmentGroup does not belong to its course (mismatching course_id), your program should throw an error,
    if (CourseInfo.id !== AssignmentGroup.course_id){
        console.log("input was invalid");
       
    }
    for (let i = 0; i < AssignmentGroup.assignments.length; i++) {
        try {if (AssignmentGroup.assignments[i].points_possible === 0) {console.log("error")}}
        catch(err) {
            console.log("error in data");
        }
           
        
    }
    for (let i = 0; i < AssignmentGroup.assignments.length; i++) {
       if (AssignmentGroup.assignments[i].due_at > "2024-1-25")
 {     
        console.log("This assignment not due yet.");
 }  
  }

  // for (let i = 0; i < AssignmentGroup.assignments.length; i++) {
  // if (LearnerSubmissions[i].submission.submitted_at>AssignmentGroup.assignments[i].due_at){
  //   LearnerSubmissions[i].submission.score-10%
  //     }
  // }
        let result = [
        {
          "id":125,
          "avg":(LearnerSubmissions[0].submission.score+LearnerSubmissions[1].submission.score)/(AssignmentGroup.assignments[0].points_possible+AssignmentGroup.assignments[1].points_possible)

        },
        {
          "id":132,
          "avg":(LearnerSubmissions[3].submission.score+LearnerSubmissions[4].submission.score)/(AssignmentGroup.assignments[0].points_possible+AssignmentGroup.assignments[1].points_possible)
        }
        ]
        console.log(result);
}
 getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions)




// // The provided course information.
// const CourseInfo = {
//     id: 451,
//     name: "Introduction to JavaScript"
//   };

// // The provided assignment group.
// const AssignmentGroup = {
// id: 12345,
// name: "Fundamentals of JavaScript",
// course_id: 451,
// group_weight: 25,
// assignments: [
//     {
//     id: 1,
//     name: "Declare a Variable",
//     due_at: "2023-01-25",
//     points_possible: 50
//     },
//     {
//     id: 2,
//     name: "Write a Function",
//     due_at: "2023-02-27",
//     points_possible: 150
//     },
//     {
//     id: 3,
//     name: "Code the World",
//     due_at: "3156-11-15",
//     points_possible: 500
//     }
// ]
// };
  
// // The provided learner submission data.
// const LearnerSubmissions = [
// {
//     learner_id: 125,
//     assignment_id: 1,
//     submission: {
//     submitted_at: "2023-01-25",
//     score: 47
//     }
// },
// {
//     learner_id: 125,
//     assignment_id: 2,
//     submission: {
//     submitted_at: "2023-02-12",
//     score: 150
//     }
// },
// {
//     learner_id: 125,
//     assignment_id: 3,
//     submission: {
//     submitted_at: "2023-01-25",
//     score: 400
//     }
// },
// {
//     learner_id: 132,
//     assignment_id: 1,
//     submission: {
//     submitted_at: "2023-01-24",
//     score: 39
//     }
// },
// {
//     learner_id: 132,
//     assignment_id: 2,
//     submission: {
//     submitted_at: "2023-03-07",
//     score: 140
//     }
// }
// ];
  
// function getLearnerData(course, ag, submissions) {
// // here, we would process this data to achieve the desired result.
// let result = [{id: 125},{id: 132}];
// for (let i = 0; i < submission; i++){
//     result.push(submissions[])
// } 
// // const result = [
// //     {//  
// //     id: 125,
// //     avg: 0.985, // (47 + 150) / (50 + 150)
// //     1: 0.94, // 47 / 50
// //     2: 1.0 // 150 / 150
// //     },
// //     {
// //     id: 132,
// //     avg: 0.82, // (39 + 125) / (50 + 150)
// //     1: 0.78, // 39 / 50
// //     2: 0.833 // late: (140 - 15) / 150
// //     }
// // ];

// return result;
// }
  
// const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

// console.log(result);
  //THE RESULT
//   [
//     { '1': 0.94, '2': 1, id: 125, avg: 0.985 },
//     { '1': 0.78, '2': 0.833, id: 132, avg: 0.82 }
//   ]