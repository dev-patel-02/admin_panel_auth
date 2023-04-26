import express from "express";
import { check } from "express-validator"; 
import { addParty, getParties, getParty, updateParty } from "../controllers/party.js";

const router = express.Router(); 

const ValidationRules = [ 
    check("name").isLength({ min: 1 }),
    check("address_1").isLength({ min: 1 }),
    check("address_2").isLength({ min: 1 }),
    check("city").isLength({ min: 1 }),
    check("state").isLength({ min: 1 }),
    check("contact_person").isLength({ min: 1 }),
    check("mobile").isLength({ min: 1 }),
    check("email").isLength({ min: 1 }).isEmail().withMessage("Invalid email address"),
    check("gst_no").isLength({ min: 1 }),
    check("fuel_charge").isLength({ min: 1 }),
  ]; 

router.post('/add-party',ValidationRules,addParty);
router.post('/update-party/:id',ValidationRules,updateParty);
router.get('/get-parties',getParties);
router.get('/get-party/:id',getParty); 

export default router;

