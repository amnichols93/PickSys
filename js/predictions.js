// Overall accuracies by level for Model 1
var level_acc = [
  {
    Year: 2020,
    L3_Right: 29,
    L3_Total: 34,
    L3_Accuracy: 85.29,
    L2_Right: 49,
    L2_Total: 85,
    L2_Accuracy: 57.65,
    L1_Right: 11,
    L1_Total: 14,
    L1_Accuracy: 78.57,
    Total: 66.92
  }
]

// Overall accuracies by level for Model 2
var level_accS = [
  {
    Year: 2020,
    L3_Right: 29,
    L3_Total: 34,
    L3_Accuracy: 85.29,
    L2_Right: 45,
    L2_Total: 78,
    L2_Accuracy: 57.69,
    L1_Right: 11,
    L1_Total: 14,
    L1_Accuracy: 78.57,
    L0_Right: 5,
    L0_Total: 7,
    L0_Accuracy: 71.43,
    Total: 67.67
  }
]

// Weekly Accuracies for Model 1
var m1_weekly_acc = [
  {
    Year: 2020,
    Week: 1,
    L3: 75,
    L3_Correct: 6,
    L3_Total: 8,
    L2: 40,
    L2_Correct: 2,
    L2_Total: 5,
    L1: 66.67,
    L1_Correct: 2,
    L1_Total: 3,
    Total: 62.5
  },
  {
    Year: 2020,
    Week: 2,
    L3: 75,
    L3_Correct: 3,
    L3_Total: 4,
    L2: 60,
    L2_Correct: 6,
    L2_Total: 10,
    L1: 100,
    L1_Correct: 2,
    L1_Total: 2,
    Total: 68.75
  },
  {
    Year: 2020,
    Week: 3,
    L3: 66.67,
    L3_Correct: 2,
    L3_Total: 3,
    L2: 36.36,
    L2_Correct: 4,
    L2_Total: 11,
    L1: 50,
    L1_Correct: 1,
    L1_Total: 2,
    Total: 43.75
  },
  {
    Year: 2020,
    Week: 4,
    L3: 100,
    L3_Correct: 3,
    L3_Total: 3,
    L2: 80,
    L2_Correct: 8,
    L2_Total: 10,
    L1: 50,
    L1_Correct: 1,
    L1_Total: 2,
    Total: 80
  },
  {
    Year: 2020,
    Week: 5,
    L3: 66.67,
    L3_Correct: 2,
    L3_Total: 3,
    L2: 72.73,
    L2_Correct: 8,
    L2_Total: 11,
    L1: 0,
    L1_Correct: 0,
    L1_Total: 0,
    Total: 71.43
  },
  {
    Year: 2020,
    Week: 6,
    L3: 100,
    L3_Correct: 3,
    L3_Total: 3,
    L2: 50,
    L2_Correct: 5,
    L2_Total: 10,
    L1: 100,
    L1_Correct: 1,
    L1_Total: 1,
    Total: 64.29
  },
  {
    Year: 2020,
    Week: 7,
    L3: 100,
    L3_Correct: 3,
    L3_Total: 3,
    L2: 66.67,
    L2_Correct: 6,
    L2_Total: 9,
    L1: 100,
    L1_Correct: 2,
    L1_Total: 2,
    Total: 78.57
  },
  {
    Year: 2020,
    Week: 8,
    L3: 100,
    L3_Correct: 3,
    L3_Total: 3,
    L2: 45.45,
    L2_Correct: 5,
    L2_Total: 11,
    L1: 0,
    L1_Correct: 0,
    L1_Total: 0,
    Total: 57.14
  },
  {
    Year: 2020,
    Week: 9,
    L3: 100,
    L3_Correct: 4,
    L3_Total: 4,
    L2: 62.5,
    L2_Correct: 5,
    L2_Total: 8,
    L1: 100,
    L1_Correct: 2,
    L1_Total: 2,
    Total: 78.57
  }
]

// Weekly Accuracies for Model 2
var m2_weekly_acc = [
  {
    Year: 2020,
    Week: 1,
    L3: 75,
    L3_Correct: 6,
    L3_Total: 8,
    L2: 40,
    L2_Correct: 2,
    L2_Total: 5,
    L1: 66.67,
    L1_Correct: 2,
    L1_Total: 3,
    L0: 0,
    L0_Correct: 0,
    L0_Total: 0,
    Total: 62.5
  },
  {
    Year: 2020,
    Week: 2,
    L3: 75,
    L3_Correct: 3,
    L3_Total: 4,
    L2: 60,
    L2_Correct: 6,
    L2_Total: 10,
    L1: 100,
    L1_Correct: 2,
    L1_Total: 2,
    L0: 0,
    L0_Correct: 0,
    L0_Total: 0,
    Total: 68.75
  },
  {
    Year: 2020,
    Week: 3,
    L3: 66.67,
    L3_Correct: 2,
    L3_Total: 3,
    L2: 36.36,
    L2_Correct: 4,
    L2_Total: 11,
    L1: 50,
    L1_Correct: 1,
    L1_Total: 2,
    L0: 0,
    L0_Correct: 0,
    L0_Total: 0,
    Total: 43.75
  },
  {
    Year: 2020,
    Week: 4,
    L3: 100,
    L3_Correct: 3,
    L3_Total: 3,
    L2: 80,
    L2_Correct: 8,
    L2_Total: 10,
    L1: 50,
    L1_Correct: 1,
    L1_Total: 2,
    L0: 0,
    L0_Correct: 0,
    L0_Total: 0,
    Total: 80
  },
  {
    Year: 2020,
    Week: 5,
    L3: 66.67,
    L3_Correct: 2,
    L3_Total: 3,
    L2: 72.73,
    L2_Correct: 8,
    L2_Total: 11,
    L1: 0,
    L1_Correct: 0,
    L1_Total: 0,
    L0: 0,
    L0_Correct: 0,
    L0_Total: 0,
    Total: 71.43
  },
  {
    Year: 2020,
    Week: 6,
    L3: 100,
    L3_Correct: 3,
    L3_Total: 3,
    L2: 44.44,
    L2_Correct: 4,
    L2_Total: 9,
    L1: 100,
    L1_Correct: 1,
    L1_Total: 1,
    L0: 100,
    L0_Correct: 1,
    L0_Total: 1,
    Total: 64.29
  },
  {
    Year: 2020,
    Week: 7,
    L3: 100,
    L3_Correct: 3,
    L3_Total: 3,
    L2: 57.14,
    L2_Correct: 4,
    L2_Total: 7,
    L1: 100,
    L1_Correct: 2,
    L1_Total: 2,
    L0: 100,
    L0_Correct: 2,
    L0_Total: 2,
    Total: 78.57
  },
  {
    Year: 2020,
    Week: 8,
    L3: 100,
    L3_Correct: 3,
    L3_Total: 3,
    L2: 50,
    L2_Correct: 4,
    L2_Total: 8,
    L1: 0,
    L1_Correct: 0,
    L1_Total: 0,
    L0: 33.33,
    L0_Correct: 1,
    L0_Total: 3,
    Total: 57.14
  },
  {
    Year: 2020,
    Week: 9,
    L3: 100,
    L3_Correct: 4,
    L3_Total: 4,
    L2: 71.43,
    L2_Correct: 5,
    L2_Total: 7,
    L1: 100,
    L1_Correct: 2,
    L1_Total: 2,
    L0: 100,
    L0_Correct: 1,
    L0_Total: 1,
    Total: 85.71
  }
];

// Model 1 Predictions
var total_pred = [
  {
    Year: 2020,
    Week: 1,
    Base_Team: "49ers",
    Opp: "Cardinals",
    Prediction: "49ers",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 1,
    Base_Team: "Bengals",
    Opp: "Chargers",
    Prediction: "Bengals",
    Level: "L3",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 1,
    Base_Team: "Bills",
    Opp: "Jets",
    Prediction: "Bills",
    Level: "L1",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 1,
    Base_Team: "Broncos",
    Opp: "Titans",
    Prediction: "Titans",
    Level: "L1",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 1,
    Base_Team: "Chiefs",
    Opp: "Texans",
    Prediction: "Chiefs",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 1,
    Base_Team: "Falcons",
    Opp: "Seahawks",
    Prediction: "Seahawks",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 1,
    Base_Team: "Giants",
    Opp: "Steelers",
    Prediction: "Steelers",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 1,
    Base_Team: "Jaguars",
    Opp: "Colts",
    Prediction: "Jaguars",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 1,
    Base_Team: "Lions",
    Opp: "Bears",
    Prediction: "Lions",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 1,
    Base_Team: "Panthers",
    Opp: "Raiders",
    Prediction: "Panthers",
    Level: "L1",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 1,
    Base_Team: "Patriots",
    Opp: "Dolphins",
    Prediction: "Patriots",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 1,
    Base_Team: "Rams",
    Opp: "Cowboys",
    Prediction: "Cowboys",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 1,
    Base_Team: "Ravens",
    Opp: "Browns",
    Prediction: "Ravens",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 1,
    Base_Team: "Saints",
    Opp: "Buccaneers",
    Prediction: "Saints",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 1,
    Base_Team: "Vikings",
    Opp: "Packers",
    Prediction: "Packers",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 1,
    Base_Team: "Washington",
    Opp: "Eagles",
    Prediction: "Eagles",
    Level: "L3",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 2,
    Base_Team: "Bears",
    Opp: "Giants",
    Prediction: "Bears",
    Level: "L1",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 2,
    Base_Team: "Browns",
    Opp: "Bengals",
    Prediction: "Bengals",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 2,
    Base_Team: "Buccaneers",
    Opp: "Panthers",
    Prediction: "Panthers",
    Level: "L3",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 2,
    Base_Team: "Cardinals",
    Opp: "Washington",
    Prediction: "Washington",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 2,
    Base_Team: "Chargers",
    Opp: "Chiefs",
    Prediction: "Chiefs",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 2,
    Base_Team: "Colts",
    Opp: "Vikings",
    Prediction: "Colts",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 2,
    Base_Team: "Cowboys",
    Opp: "Falcons",
    Prediction: "Falcons",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 2,
    Base_Team: "Dolphins",
    Opp: "Bills",
    Prediction: "Bills",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 2,
    Base_Team: "Eagles",
    Opp: "Rams",
    Prediction: "Eagles",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 2,
    Base_Team: "Jets",
    Opp: "49ers",
    Prediction: "49ers",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 2,
    Base_Team: "Packers",
    Opp: "Lions",
    Prediction: "Packers",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 2,
    Base_Team: "Raiders",
    Opp: "Saints",
    Prediction: "Raiders",
    Level: "L1",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 2,
    Base_Team: "Seahawks",
    Opp: "Patriots",
    Prediction: "Seahawks",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 2,
    Base_Team: "Steelers",
    Opp: "Broncos",
    Prediction: "Steelers",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 2,
    Base_Team: "Texans",
    Opp: "Ravens",
    Prediction: "Ravens",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 2,
    Base_Team: "Titans",
    Opp: "Jaguars",
    Prediction: "Titans",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 3,
    Base_Team: "Bills",
    Opp: "Rams",
    Prediction: "Rams",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 3,
    Base_Team: "Broncos",
    Opp: "Buccaneers",
    Prediction: "Buccaneers",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 3,
    Base_Team: "Browns",
    Opp: "Washington",
    Prediction: "Washington",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 3,
    Base_Team: "Cardinals",
    Opp: "Lions",
    Prediction: "Cardinals",
    Level: "L3",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 3,
    Base_Team: "Chargers",
    Opp: "Panthers",
    Prediction: "Chargers",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 3,
    Base_Team: "Colts",
    Opp: "Jets",
    Prediction: "Jets",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 3,
    Base_Team: "Eagles",
    Opp: "Bengals",
    Prediction: "Bengals",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 3,
    Base_Team: "Falcons",
    Opp: "Bears",
    Prediction: "Falcons",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 3,
    Base_Team: "Giants",
    Opp: "49ers",
    Prediction: "49ers",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 3,
    Base_Team: "Jaguars",
    Opp: "Dolphins",
    Prediction: "Jaguars",
    Level: "L1",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 3,
    Base_Team: "Patriots",
    Opp: "Raiders",
    Prediction: "Patriots",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 3,
    Base_Team: "Ravens",
    Opp: "Chiefs",
    Prediction: "Ravens",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 3,
    Base_Team: "Saints",
    Opp: "Packers",
    Prediction: "Packers",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 3,
    Base_Team: "Seahawks",
    Opp: "Cowboys",
    Prediction: "Seahawks",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 3,
    Base_Team: "Steelers",
    Opp: "Texans",
    Prediction: "Steelers",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 3,
    Base_Team: "Vikings",
    Opp: "Titans",
    Prediction: "Titans",
    Level: "L1",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 4,
    Base_Team: "49ers",
    Opp: "Eagles",
    Prediction: "Eagles",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 4,
    Base_Team: "Bears",
    Opp: "Colts",
    Prediction: "Colts",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 4,
    Base_Team: "Bengals",
    Opp: "Jaguars",
    Prediction: "Jaguars",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 4,
    Base_Team: "Buccaneers",
    Opp: "Chargers",
    Prediction: "Buccaneers",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 4,
    Base_Team: "Chiefs",
    Opp: "Patriots",
    Prediction: "Chiefs",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 4,
    Base_Team: "Cowboys",
    Opp: "Browns",
    Prediction: "Cowboys",
    Level: "L1",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 4,
    Base_Team: "Dolphins",
    Opp: "Seahawks",
    Prediction: "Seahawks",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 4,
    Base_Team: "Jets",
    Opp: "Broncos",
    Prediction: "Broncos",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 4,
    Base_Team: "Lions",
    Opp: "Saints",
    Prediction: "Saints",
    Level: "L1",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 4,
    Base_Team: "Packers",
    Opp: "Falcons",
    Prediction: "Packers",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 4,
    Base_Team: "Panthers",
    Opp: "Cardinals",
    Prediction: "Panthers",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 4,
    Base_Team: "Raiders",
    Opp: "Bills",
    Prediction: "Bills",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 4,
    Base_Team: "Rams",
    Opp: "Giants",
    Prediction: "Giants",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 4,
    Base_Team: "Texans",
    Opp: "Vikings",
    Prediction: "Vikings",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 4,
    Base_Team: "Washington",
    Opp: "Ravens",
    Prediction: "Ravens",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 5,
    Base_Team: "49ers",
    Opp: "Dolphins",
    Prediction: "Dolphins",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 5,
    Base_Team: "Bears",
    Opp: "Buccaneers",
    Prediction: "Bears",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 5,
    Base_Team: "Browns",
    Opp: "Colts",
    Prediction: "Colts",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 5,
    Base_Team: "Chiefs",
    Opp: "Raiders",
    Prediction: "Chiefs",
    Level: "L3",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 5,
    Base_Team: "Cowboys",
    Opp: "Giants",
    Prediction: "Cowboys",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 5,
    Base_Team: "Falcons",
    Opp: "Panthers",
    Prediction: "Falcons",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 5,
    Base_Team: "Jets",
    Opp: "Cardinals",
    Prediction: "Cardinals",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 5,
    Base_Team: "Ravens",
    Opp: "Bengals",
    Prediction: "Ravens",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 5,
    Base_Team: "Saints",
    Opp: "Chargers",
    Prediction: "Saints",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 5,
    Base_Team: "Seahawks",
    Opp: "Vikings",
    Prediction: "Seahawks",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 5,
    Base_Team: "Steelers",
    Opp: "Eagles",
    Prediction: "Steelers",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 5,
    Base_Team: "Texans",
    Opp: "Jaguars",
    Prediction: "Jaguars",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 5,
    Base_Team: "Titans",
    Opp: "Bills",
    Prediction: "Titans",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 5,
    Base_Team: "Washington",
    Opp: "Rams",
    Prediction: "Rams",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 6,
    Base_Team: "49ers",
    Opp: "Rams",
    Prediction: "Rams",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 6,
    Base_Team: "Bills",
    Opp: "Chiefs",
    Prediction: "Chiefs",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 6,
    Base_Team: "Buccaneers",
    Opp: "Packers",
    Prediction: "Packers",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 6,
    Base_Team: "Colts",
    Opp: "Bengals",
    Prediction: "Colts",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 6,
    Base_Team: "Cowboys",
    Opp: "Cardinals",
    Prediction: "Cardinals",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 6,
    Base_Team: "Dolphins",
    Opp: "Jets",
    Prediction: "Dolphins",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 6,
    Base_Team: "Eagles",
    Opp: "Ravens",
    Prediction: "Ravens",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 6,
    Base_Team: "Giants",
    Opp: "Washington",
    Prediction: "Giants",
    Level: "L1",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 6,
    Base_Team: "Jaguars",
    Opp: "Lions",
    Prediction: "Lions",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 6,
    Base_Team: "Panthers",
    Opp: "Bears",
    Prediction: "Panthers",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 6,
    Base_Team: "Patriots",
    Opp: "Broncos",
    Prediction: "Patriots",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 6,
    Base_Team: "Steelers",
    Opp: "Browns",
    Prediction: "Steelers",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 6,
    Base_Team: "Titans",
    Opp: "Texans",
    Prediction: "Titans",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 6,
    Base_Team: "Vikings",
    Opp: "Falcons",
    Prediction: "Vikings",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 7,
    Base_Team: "Bengals",
    Opp: "Browns",
    Prediction: "Browns",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 7,
    Base_Team: "Broncos",
    Opp: "Chiefs",
    Prediction: "Chiefs",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 7,
    Base_Team: "Cardinals",
    Opp: "Seahawks",
    Prediction: "Seahawks",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 7,
    Base_Team: "Chargers",
    Opp: "Jaguars",
    Prediction: "Chargers",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 7,
    Base_Team: "Eagles",
    Opp: "Giants",
    Prediction: "Eagles",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 7,
    Base_Team: "Falcons",
    Opp: "Lions",
    Prediction: "Falcons",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 7,
    Base_Team: "Jets",
    Opp: "Bills",
    Prediction: "Bills",
    Level: "L1",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 7,
    Base_Team: "Patriots",
    Opp: "49ers",
    Prediction: "49ers",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 7,
    Base_Team: "Raiders",
    Opp: "Buccaneers",
    Prediction: "Buccaneers",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 7,
    Base_Team: "Rams",
    Opp: "Bears",
    Prediction: "Rams",
    Level: "L1",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 7,
    Base_Team: "Saints",
    Opp: "Panthers",
    Prediction: "Saints",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 7,
    Base_Team: "Texans",
    Opp: "Packers",
    Prediction: "Packers",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 7,
    Base_Team: "Titans",
    Opp: "Steelers",
    Prediction: "Steelers",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 7,
    Base_Team: "Washington",
    Opp: "Cowboys",
    Prediction: "Cowboys",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 8,
    Base_Team: "Bears",
    Opp: "Saints",
    Prediction: "Saints",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 8,
    Base_Team: "Bengals",
    Opp: "Titans",
    Prediction: "Titans",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 8,
    Base_Team: "Bills",
    Opp: "Patriots",
    Prediction: "Patriots",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 8,
    Base_Team: "Broncos",
    Opp: "Chargers",
    Prediction: "Broncos",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 8,
    Base_Team: "Browns",
    Opp: "Raiders",
    Prediction: "Browns",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 8,
    Base_Team: "Chiefs",
    Opp: "Jets",
    Prediction: "Chiefs",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 8,
    Base_Team: "Dolphins",
    Opp: "Rams",
    Prediction: "Dolphins",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 8,
    Base_Team: "Eagles",
    Opp: "Cowboys",
    Prediction: "Cowboys",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 8,
    Base_Team: "Giants",
    Opp: "Buccaneers",
    Prediction: "Buccaneers",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 8,
    Base_Team: "Lions",
    Opp: "Colts",
    Prediction: "Colts",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 8,
    Base_Team: "Packers",
    Opp: "Vikings",
    Prediction: "Packers",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 8,
    Base_Team: "Panthers",
    Opp: "Falcons",
    Prediction: "Falcons",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 8,
    Base_Team: "Ravens",
    Opp: "Steelers",
    Prediction: "Ravens",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 8,
    Base_Team: "Seahawks",
    Opp: "49ers",
    Prediction: "Seahawks",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 9,
    Base_Team: "49ers",
    Opp: "Packers",
    Prediction: "Packers",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 9,
    Base_Team: "Bills",
    Opp: "Seahawks",
    Prediction: "Seahawks",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 9,
    Base_Team: "Buccaneers",
    Opp: "Saints",
    Prediction: "Saints",
    Level: "L1",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 9,
    Base_Team: "Cardinals",
    Opp: "Dolphins",
    Prediction: "Cardinals",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 9,
    Base_Team: "Chargers",
    Opp: "Raiders",
    Prediction: "Raiders",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 9,
    Base_Team: "Chiefs",
    Opp: "Panthers",
    Prediction: "Chiefs",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 9,
    Base_Team: "Colts",
    Opp: "Ravens",
    Prediction: "Ravens",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 9,
    Base_Team: "Cowboys",
    Opp: "Steelers",
    Prediction: "Cowboys",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 9,
    Base_Team: "Falcons",
    Opp: "Broncos",
    Prediction: "Falcons",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 9,
    Base_Team: "Jaguars",
    Opp: "Texans",
    Prediction: "Texans",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 9,
    Base_Team: "Jets",
    Opp: "Patriots",
    Prediction: "Patriots",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 9,
    Base_Team: "Titans",
    Opp: "Bears",
    Prediction: "Titans",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 9,
    Base_Team: "Vikings",
    Opp: "Lions",
    Prediction: "Vikings",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 9,
    Base_Team: "Washington",
    Opp: "Giants",
    Prediction: "Giants",
    Level: "L1",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 10,
    Base_Team: "Bears",
    Opp: "Vikings",
    Prediction: "Bears",
    Level: "L3",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 10,
    Base_Team: "Browns",
    Opp: "Texans",
    Prediction: "Browns",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 10,
    Base_Team: "Cardinals",
    Opp: "Bills",
    Prediction: "Bills",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 10,
    Base_Team: "Dolphins",
    Opp: "Chargers",
    Prediction: "Dolphins",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 10,
    Base_Team: "Giants",
    Opp: "Eagles",
    Prediction: "Eagles",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 10,
    Base_Team: "Lions",
    Opp: "Washington",
    Prediction: "Lions",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 10,
    Base_Team: "Packers",
    Opp: "Jaguars",
    Prediction: "Packers",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 10,
    Base_Team: "Panthers",
    Opp: "Buccaneers",
    Prediction: "Panthers",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 10,
    Base_Team: "Patriots",
    Opp: "Ravens",
    Prediction: "Ravens",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 10,
    Base_Team: "Raiders",
    Opp: "Broncos",
    Prediction: "Raiders",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 10,
    Base_Team: "Rams",
    Opp: "Seahawks",
    Prediction: "Seahawks",
    Level: "L1",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 10,
    Base_Team: "Saints",
    Opp: "49ers",
    Prediction: "Saints",
    Level: "L1",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 10,
    Base_Team: "Steelers",
    Opp: "Bengals",
    Prediction: "Steelers",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 10,
    Base_Team: "Titans",
    Opp: "Colts",
    Prediction: "Colts",
    Level: "L2",
    Correct: 0
  }
];

// Model 2 Predictions
var total_predS = [
  {
    Year: 2020,
    Week: 1,
    Base_Team: "49ers",
    Opp: "Cardinals",
    Prediction: "49ers",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 1,
    Base_Team: "Bengals",
    Opp: "Chargers",
    Prediction: "Bengals",
    Level: "L3",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 1,
    Base_Team: "Bills",
    Opp: "Jets",
    Prediction: "Bills",
    Level: "L1",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 1,
    Base_Team: "Broncos",
    Opp: "Titans",
    Prediction: "Titans",
    Level: "L1",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 1,
    Base_Team: "Chiefs",
    Opp: "Texans",
    Prediction: "Chiefs",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 1,
    Base_Team: "Falcons",
    Opp: "Seahawks",
    Prediction: "Seahawks",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 1,
    Base_Team: "Giants",
    Opp: "Steelers",
    Prediction: "Steelers",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 1,
    Base_Team: "Jaguars",
    Opp: "Colts",
    Prediction: "Jaguars",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 1,
    Base_Team: "Lions",
    Opp: "Bears",
    Prediction: "Lions",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 1,
    Base_Team: "Panthers",
    Opp: "Raiders",
    Prediction: "Panthers",
    Level: "L1",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 1,
    Base_Team: "Patriots",
    Opp: "Dolphins",
    Prediction: "Patriots",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 1,
    Base_Team: "Rams",
    Opp: "Cowboys",
    Prediction: "Cowboys",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 1,
    Base_Team: "Ravens",
    Opp: "Browns",
    Prediction: "Ravens",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 1,
    Base_Team: "Saints",
    Opp: "Buccaneers",
    Prediction: "Saints",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 1,
    Base_Team: "Vikings",
    Opp: "Packers",
    Prediction: "Packers",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 1,
    Base_Team: "Washington",
    Opp: "Eagles",
    Prediction: "Eagles",
    Level: "L3",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 2,
    Base_Team: "Bears",
    Opp: "Giants",
    Prediction: "Bears",
    Level: "L1",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 2,
    Base_Team: "Browns",
    Opp: "Bengals",
    Prediction: "Bengals",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 2,
    Base_Team: "Buccaneers",
    Opp: "Panthers",
    Prediction: "Panthers",
    Level: "L3",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 2,
    Base_Team: "Cardinals",
    Opp: "Washington",
    Prediction: "Washington",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 2,
    Base_Team: "Chargers",
    Opp: "Chiefs",
    Prediction: "Chiefs",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 2,
    Base_Team: "Colts",
    Opp: "Vikings",
    Prediction: "Colts",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 2,
    Base_Team: "Cowboys",
    Opp: "Falcons",
    Prediction: "Falcons",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 2,
    Base_Team: "Dolphins",
    Opp: "Bills",
    Prediction: "Bills",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 2,
    Base_Team: "Eagles",
    Opp: "Rams",
    Prediction: "Eagles",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 2,
    Base_Team: "Jets",
    Opp: "49ers",
    Prediction: "49ers",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 2,
    Base_Team: "Packers",
    Opp: "Lions",
    Prediction: "Packers",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 2,
    Base_Team: "Raiders",
    Opp: "Saints",
    Prediction: "Raiders",
    Level: "L1",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 2,
    Base_Team: "Seahawks",
    Opp: "Patriots",
    Prediction: "Seahawks",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 2,
    Base_Team: "Steelers",
    Opp: "Broncos",
    Prediction: "Steelers",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 2,
    Base_Team: "Texans",
    Opp: "Ravens",
    Prediction: "Ravens",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 2,
    Base_Team: "Titans",
    Opp: "Jaguars",
    Prediction: "Titans",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 3,
    Base_Team: "Bills",
    Opp: "Rams",
    Prediction: "Rams",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 3,
    Base_Team: "Broncos",
    Opp: "Buccaneers",
    Prediction: "Buccaneers",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 3,
    Base_Team: "Browns",
    Opp: "Washington",
    Prediction: "Washington",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 3,
    Base_Team: "Cardinals",
    Opp: "Lions",
    Prediction: "Cardinals",
    Level: "L3",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 3,
    Base_Team: "Chargers",
    Opp: "Panthers",
    Prediction: "Chargers",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 3,
    Base_Team: "Colts",
    Opp: "Jets",
    Prediction: "Jets",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 3,
    Base_Team: "Eagles",
    Opp: "Bengals",
    Prediction: "Bengals",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 3,
    Base_Team: "Falcons",
    Opp: "Bears",
    Prediction: "Falcons",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 3,
    Base_Team: "Giants",
    Opp: "49ers",
    Prediction: "49ers",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 3,
    Base_Team: "Jaguars",
    Opp: "Dolphins",
    Prediction: "Jaguars",
    Level: "L1",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 3,
    Base_Team: "Patriots",
    Opp: "Raiders",
    Prediction: "Patriots",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 3,
    Base_Team: "Ravens",
    Opp: "Chiefs",
    Prediction: "Ravens",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 3,
    Base_Team: "Saints",
    Opp: "Packers",
    Prediction: "Packers",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 3,
    Base_Team: "Seahawks",
    Opp: "Cowboys",
    Prediction: "Seahawks",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 3,
    Base_Team: "Steelers",
    Opp: "Texans",
    Prediction: "Steelers",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 3,
    Base_Team: "Vikings",
    Opp: "Titans",
    Prediction: "Titans",
    Level: "L1",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 4,
    Base_Team: "49ers",
    Opp: "Eagles",
    Prediction: "Eagles",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 4,
    Base_Team: "Bears",
    Opp: "Colts",
    Prediction: "Colts",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 4,
    Base_Team: "Bengals",
    Opp: "Jaguars",
    Prediction: "Jaguars",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 4,
    Base_Team: "Buccaneers",
    Opp: "Chargers",
    Prediction: "Buccaneers",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 4,
    Base_Team: "Chiefs",
    Opp: "Patriots",
    Prediction: "Chiefs",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 4,
    Base_Team: "Cowboys",
    Opp: "Browns",
    Prediction: "Cowboys",
    Level: "L1",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 4,
    Base_Team: "Dolphins",
    Opp: "Seahawks",
    Prediction: "Seahawks",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 4,
    Base_Team: "Jets",
    Opp: "Broncos",
    Prediction: "Broncos",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 4,
    Base_Team: "Lions",
    Opp: "Saints",
    Prediction: "Saints",
    Level: "L1",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 4,
    Base_Team: "Packers",
    Opp: "Falcons",
    Prediction: "Packers",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 4,
    Base_Team: "Panthers",
    Opp: "Cardinals",
    Prediction: "Panthers",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 4,
    Base_Team: "Raiders",
    Opp: "Bills",
    Prediction: "Bills",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 4,
    Base_Team: "Rams",
    Opp: "Giants",
    Prediction: "Giants",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 4,
    Base_Team: "Texans",
    Opp: "Vikings",
    Prediction: "Vikings",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 4,
    Base_Team: "Washington",
    Opp: "Ravens",
    Prediction: "Ravens",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 5,
    Base_Team: "49ers",
    Opp: "Dolphins",
    Prediction: "Dolphins",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 5,
    Base_Team: "Bears",
    Opp: "Buccaneers",
    Prediction: "Bears",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 5,
    Base_Team: "Browns",
    Opp: "Colts",
    Prediction: "Colts",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 5,
    Base_Team: "Chiefs",
    Opp: "Raiders",
    Prediction: "Chiefs",
    Level: "L3",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 5,
    Base_Team: "Cowboys",
    Opp: "Giants",
    Prediction: "Cowboys",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 5,
    Base_Team: "Falcons",
    Opp: "Panthers",
    Prediction: "Falcons",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 5,
    Base_Team: "Jets",
    Opp: "Cardinals",
    Prediction: "Cardinals",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 5,
    Base_Team: "Ravens",
    Opp: "Bengals",
    Prediction: "Ravens",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 5,
    Base_Team: "Saints",
    Opp: "Chargers",
    Prediction: "Saints",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 5,
    Base_Team: "Seahawks",
    Opp: "Vikings",
    Prediction: "Seahawks",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 5,
    Base_Team: "Steelers",
    Opp: "Eagles",
    Prediction: "Steelers",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 5,
    Base_Team: "Texans",
    Opp: "Jaguars",
    Prediction: "Jaguars",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 5,
    Base_Team: "Titans",
    Opp: "Bills",
    Prediction: "Titans",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 5,
    Base_Team: "Washington",
    Opp: "Rams",
    Prediction: "Rams",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 6,
    Base_Team: "49ers",
    Opp: "Rams",
    Prediction: "Rams",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 6,
    Base_Team: "Bills",
    Opp: "Chiefs",
    Prediction: "Chiefs",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 6,
    Base_Team: "Buccaneers",
    Opp: "Packers",
    Prediction: "Packers",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 6,
    Base_Team: "Colts",
    Opp: "Bengals",
    Prediction: "Colts",
    Level: "L0",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 6,
    Base_Team: "Cowboys",
    Opp: "Cardinals",
    Prediction: "Cardinals",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 6,
    Base_Team: "Dolphins",
    Opp: "Jets",
    Prediction: "Dolphins",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 6,
    Base_Team: "Eagles",
    Opp: "Ravens",
    Prediction: "Ravens",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 6,
    Base_Team: "Giants",
    Opp: "Washington",
    Prediction: "Giants",
    Level: "L1",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 6,
    Base_Team: "Jaguars",
    Opp: "Lions",
    Prediction: "Lions",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 6,
    Base_Team: "Panthers",
    Opp: "Bears",
    Prediction: "Panthers",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 6,
    Base_Team: "Patriots",
    Opp: "Broncos",
    Prediction: "Patriots",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 6,
    Base_Team: "Steelers",
    Opp: "Browns",
    Prediction: "Steelers",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 6,
    Base_Team: "Titans",
    Opp: "Texans",
    Prediction: "Titans",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 6,
    Base_Team: "Vikings",
    Opp: "Falcons",
    Prediction: "Vikings",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 7,
    Base_Team: "Bengals",
    Opp: "Browns",
    Prediction: "Browns",
    Level: "L0",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 7,
    Base_Team: "Broncos",
    Opp: "Chiefs",
    Prediction: "Chiefs",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 7,
    Base_Team: "Cardinals",
    Opp: "Seahawks",
    Prediction: "Seahawks",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 7,
    Base_Team: "Chargers",
    Opp: "Jaguars",
    Prediction: "Chargers",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 7,
    Base_Team: "Eagles",
    Opp: "Giants",
    Prediction: "Eagles",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 7,
    Base_Team: "Falcons",
    Opp: "Lions",
    Prediction: "Falcons",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 7,
    Base_Team: "Jets",
    Opp: "Bills",
    Prediction: "Bills",
    Level: "L1",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 7,
    Base_Team: "Patriots",
    Opp: "49ers",
    Prediction: "49ers",
    Level: "L0",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 7,
    Base_Team: "Raiders",
    Opp: "Buccaneers",
    Prediction: "Buccaneers",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 7,
    Base_Team: "Rams",
    Opp: "Bears",
    Prediction: "Rams",
    Level: "L1",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 7,
    Base_Team: "Saints",
    Opp: "Panthers",
    Prediction: "Saints",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 7,
    Base_Team: "Texans",
    Opp: "Packers",
    Prediction: "Packers",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 7,
    Base_Team: "Titans",
    Opp: "Steelers",
    Prediction: "Steelers",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 7,
    Base_Team: "Washington",
    Opp: "Cowboys",
    Prediction: "Cowboys",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 8,
    Base_Team: "Bears",
    Opp: "Saints",
    Prediction: "Saints",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 8,
    Base_Team: "Bengals",
    Opp: "Titans",
    Prediction: "Titans",
    Level: "L0",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 8,
    Base_Team: "Bills",
    Opp: "Patriots",
    Prediction: "Patriots",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 8,
    Base_Team: "Broncos",
    Opp: "Chargers",
    Prediction: "Broncos",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 8,
    Base_Team: "Browns",
    Opp: "Raiders",
    Prediction: "Browns",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 8,
    Base_Team: "Chiefs",
    Opp: "Jets",
    Prediction: "Chiefs",
    Level: "L0",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 8,
    Base_Team: "Dolphins",
    Opp: "Rams",
    Prediction: "Dolphins",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 8,
    Base_Team: "Eagles",
    Opp: "Cowboys",
    Prediction: "Cowboys",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 8,
    Base_Team: "Giants",
    Opp: "Buccaneers",
    Prediction: "Buccaneers",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 8,
    Base_Team: "Lions",
    Opp: "Colts",
    Prediction: "Colts",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 8,
    Base_Team: "Packers",
    Opp: "Vikings",
    Prediction: "Packers",
    Level: "L0",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 8,
    Base_Team: "Panthers",
    Opp: "Falcons",
    Prediction: "Falcons",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 8,
    Base_Team: "Ravens",
    Opp: "Steelers",
    Prediction: "Ravens",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 8,
    Base_Team: "Seahawks",
    Opp: "49ers",
    Prediction: "Seahawks",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 9,
    Base_Team: "49ers",
    Opp: "Packers",
    Prediction: "Packers",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 9,
    Base_Team: "Bills",
    Opp: "Seahawks",
    Prediction: "Seahawks",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 9,
    Base_Team: "Buccaneers",
    Opp: "Saints",
    Prediction: "Saints",
    Level: "L1",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 9,
    Base_Team: "Cardinals",
    Opp: "Dolphins",
    Prediction: "Cardinals",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 9,
    Base_Team: "Chargers",
    Opp: "Raiders",
    Prediction: "Raiders",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 9,
    Base_Team: "Chiefs",
    Opp: "Panthers",
    Prediction: "Chiefs",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 9,
    Base_Team: "Colts",
    Opp: "Ravens",
    Prediction: "Ravens",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 9,
    Base_Team: "Cowboys",
    Opp: "Steelers",
    Prediction: "Steelers",
    Level: "L0",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 9,
    Base_Team: "Falcons",
    Opp: "Broncos",
    Prediction: "Falcons",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 9,
    Base_Team: "Jaguars",
    Opp: "Texans",
    Prediction: "Texans",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 9,
    Base_Team: "Jets",
    Opp: "Patriots",
    Prediction: "Patriots",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 9,
    Base_Team: "Titans",
    Opp: "Bears",
    Prediction: "Titans",
    Level: "L3",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 9,
    Base_Team: "Vikings",
    Opp: "Lions",
    Prediction: "Vikings",
    Level: "L2",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 9,
    Base_Team: "Washington",
    Opp: "Giants",
    Prediction: "Giants",
    Level: "L1",
    Correct: 1
  },
  {
    Year: 2020,
    Week: 10,
    Base_Team: "Bears",
    Opp: "Vikings",
    Prediction: "Bears",
    Level: "L3",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 10,
    Base_Team: "Browns",
    Opp: "Texans",
    Prediction: "Browns",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 10,
    Base_Team: "Cardinals",
    Opp: "Bills",
    Prediction: "Bills",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 10,
    Base_Team: "Dolphins",
    Opp: "Chargers",
    Prediction: "Dolphins",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 10,
    Base_Team: "Giants",
    Opp: "Eagles",
    Prediction: "Eagles",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 10,
    Base_Team: "Lions",
    Opp: "Washington",
    Prediction: "Lions",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 10,
    Base_Team: "Packers",
    Opp: "Jaguars",
    Prediction: "Packers",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 10,
    Base_Team: "Panthers",
    Opp: "Buccaneers",
    Prediction: "Buccaneers",
    Level: "L0",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 10,
    Base_Team: "Patriots",
    Opp: "Ravens",
    Prediction: "Ravens",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 10,
    Base_Team: "Raiders",
    Opp: "Broncos",
    Prediction: "Raiders",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 10,
    Base_Team: "Rams",
    Opp: "Seahawks",
    Prediction: "Seahawks",
    Level: "L1",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 10,
    Base_Team: "Saints",
    Opp: "49ers",
    Prediction: "Saints",
    Level: "L0",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 10,
    Base_Team: "Steelers",
    Opp: "Bengals",
    Prediction: "Steelers",
    Level: "L2",
    Correct: 0
  },
  {
    Year: 2020,
    Week: 10,
    Base_Team: "Titans",
    Opp: "Colts",
    Prediction: "Titans",
    Level: "L0",
    Correct: 0
  }
]