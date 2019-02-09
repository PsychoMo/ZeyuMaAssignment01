let express = require("express");
let router = express.Router();

let contactController = require('../controllers/contact');

/** Get contact list page - read operation */
router.get("/", contactController.displayContactList);

/** GET Route for the Add page
 * this will display the Add page
*/

router.get('/add', contactController.displayAddPage);

/**POST Route for processing the Add */
router.post('/add', contactController.processAddPage);

/** GET Request - display the Edit page */
router.get('/edit/:id', contactController.displayEditPage);

router.post('/edit/:id', contactController.processEditPage);

/** GET request to perform the delete action */
router.get('/delete/:id', contactController.performDelete);

module.exports = router;
