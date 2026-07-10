// import multer from 'multer';

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, './src/uploads')
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() +"-"+ file.originalname)
//         console.log(file, 'originalname');
//     }
// })

// const upload = multer({ storage: storage });

// export default upload



import multer from 'multer';
import fs from 'fs';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = '/tmp/uploads';
        // create folder automatically if it doesn't exist
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        cb(null, dir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage });

export default upload;

