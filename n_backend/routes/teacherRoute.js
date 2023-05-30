import express from 'express';
import { getTeachers, loginTeacher, logout, registerTeacher } from '../controllers/teacherController.js';

const router = express.Router();

router.route("/register-teacher").post(registerTeacher);
router.route("/get-teachers").get(getTeachers);
router.route("/login").post(loginTeacher);
router.route("/logout").get(logout);

export default router;