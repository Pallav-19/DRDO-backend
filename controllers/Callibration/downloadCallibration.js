const callibration = require("../../models/callibration");
const path = require('path')
const downloadCallibration = async (req, res) => {

    const id = req.params.id;
    await callibration.findById(id).then((found) => {
        const filePath = path.join(__dirname, '../../', 'public/binFiles', found?.filename);
        const fp = found?.filename?.replace('.txt', '.rx')
        res.set({
            'Content-Type': 'application/octet-stream',
            'Content-Disposition': `attachment; filename=${fp}`,
        });


        res.download(filePath, fp);
    }).catch(err => res.json({ message: err.message }))
}
module.exports = downloadCallibration