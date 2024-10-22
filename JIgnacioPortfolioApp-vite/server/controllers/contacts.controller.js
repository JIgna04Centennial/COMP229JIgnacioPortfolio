import Contact from '../models/contact.model.js';
import extend from 'lodash/extend.js';
import errorHandler from './error.controller.js';

const create = async (req, res) => {
    const contact = new Contact(req.body);
    try {
        await contact.save();
        return res.status(200).json({
            message: 'Successfully added a contact!',
        });
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err),
        });
    }
};

const list = async (req, res) => {
    try {
        const contacts = await Contact.find().select('');
        res.json(contacts);
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err),
        });
    }
};

const contactByID = async (req, res, next, id) => {
    try {
        const contact = await Contact.findById(id);
        if (!contact) {
            return res.status(400).json({
                error: 'Contact not found',
            });
        }
        req.contact = contact;
        next();
    } catch (err) {
        return res.status(400).json({
            error: 'Could not retrieve contact',
        });
    }
};

const read = (req, res) => {
    const contact = req.contact.toObject();
    delete contact.name;
    delete contact.email;
    return res.json(contact);
};

const update = async (req, res) => {
    try {
        let contact = req.contact;
        contact = extend(contact, req.body);
        contact.updated = Date.now();
        await contact.save();
        const updatedContact = contact.toObject();
        res.json(updatedContact);
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err),
        });
    }
};

const remove = async (req, res) => {
    try {
        const contactId = req.params.contactId;

        // Find the contact by ID and delete it
        const deletedContact = await Contact.findByIdAndDelete(contactId);

        if (!deletedContact) {
            return res.status(404).json({
                error: 'Contact not found',
            });
        }

        const result = deletedContact.toObject();
        delete result.name;
        delete result.email;

        // Return a success message after the contact is deleted
        res.json({
            message: 'Contact successfully removed',
        });

    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err),
        });
    }
};

const removeAll = async (req, res) => {
    try {
        // Use deleteMany to remove all contacts
        const result = await Contact.deleteMany({});

        // Return a success message with the count of deleted contacts
        res.json({
            message: `Successfully removed ${result.deletedCount} contact(s)`,
        });
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err),
        });
    }
};



export default { create, contactByID, read, list, remove, update, removeAll };
