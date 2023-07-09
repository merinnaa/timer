const args = process.argv.slice(2);

const Alarm = function(beeb) {
  const milliseconds = Number(beeb) * 1000;
  if (isNaN(milliseconds) || milliseconds < 0) {
    return;
  }

  setTimeout(() => {
    process.stdout.write('\x07');
  }, milliseconds);
};

const nextAlarms = function(alarms) {
  for (const alarm of alarms) {
    if (!isNaN(alarm) && Number(alarm) >= 0) {
      Alarm(alarm);
    }
  }
};

nextAlarms(args);
  
