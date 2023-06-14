const callibration = require('../../models/callibration')
const path = require('path')
const fs = require('fs');

const downloadCallibration = async (req, res) => {

    const id = req.params.id;
    await callibration.findById(id).then((found) => {
        res.set({
            'Content-Type': 'application/octet-stream',
            'Content-Disposition': `attachment; filename=${found?.filename}`,
        });
        const filePath = path.join(__dirname, '../../', 'public/binFiles', found?.filename);

        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Error reading the file.');
            }

            
            res.send(data);
        });
    }).catch(err => res.json({ message: err.message }))
}
module.exports = downloadCallibration