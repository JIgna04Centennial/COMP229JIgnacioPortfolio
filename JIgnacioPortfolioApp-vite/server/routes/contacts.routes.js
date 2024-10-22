import express from 'express';
import contactCtrl from '../controllers/contacts.controller.js';

const router = express.Router();
router.param('contactId', contactCtrl.contactByID);

router.route('/api/contacts')
    .get(contactCtrl.list)
    .post(contactCtrl.create);

router.route('/api/contacts/:contactId')
    .get(contactCtrl.read)
    .put(contactCtrl.update)
    .delete(contactCtrl.remove);

// Route for removing all contacts
router.route('/api/contacts')
    .delete(contactCtrl.removeAll); // Delete all contacts

export default router;
