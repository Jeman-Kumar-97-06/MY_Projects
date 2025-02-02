const exp = require('express');
const {
    getNotes,
    getNote,
    createNote,
    delNote,
    patchNote
}         = require('../controllers/noteControllers');

const requireAuth = require('../middleware/requireAuth');

const router = exp.Router();

router.use(requireAuth);

router.get('/',getNotes);

router.get('/:id',getNote);

router.post('/',createNote);

router.delete('/:id',delNote);

router.patch('/:id',patchNote);

module.exports = router;