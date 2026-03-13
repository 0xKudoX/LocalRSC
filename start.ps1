Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd D:\rsc\rsc-data-server; node src/bin.js"
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd D:\rsc\rsc-server; node src/bin.js"
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd D:\rsc\rsc-client; npm start"