const fs = require('fs');

fs.writeFile('exp9.txt', 'Hi my name is RAHUL KUMAR', err => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File written successfully.');
        
        // Read the file after writing
        fs.readFile('exp9.txt', 'utf-8', (readErr, data) => {
            if (readErr) {
                console.error('Error reading file:', readErr);
            } else {
                console.log('File content:', data);

                // Delete the file after reading
                fs.unlink('exp9.txt', unlinkErr => {
                    if (unlinkErr) {
                        console.error('Error deleting file:', unlinkErr);
                    } else {
                        console.log('File deleted successfully.');
                    }
                });
            }
        });
    }
});
