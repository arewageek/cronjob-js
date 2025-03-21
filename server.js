const schedule = require("node-schedule");

const date = new Date(2025, 3, 21, 18, 43, 0);

const rule = new schedule.RecurrenceRule();
rule.minute = 0.1;

const time = {
  hour: 1,
  minute: 30,
  dayOfWeek: 6,
};

const job = schedule.scheduleJob(time, () => {
  console.log(`This job is running on ${date}`);
});
