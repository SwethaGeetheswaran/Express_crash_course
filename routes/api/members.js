const express = require("express");
const router = express.Router();
const members = require("../../Members");
const uuid = require("uuid");
// Gets all members
router.get("/", (req, res) => {
  res.json(members);
});

// GET one members
router.get("/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));

  if (found) {
    res.json(members.filter((item) => item.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: "Member not found" });
  }
});

//POST request
router.post("/", (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: "active",
  };

  if (!newMember.name || !newMember.email) {
    res.status(400).json({ msg: "Please include both name and email" });
  }
  members.push(newMember);
  res.json(members);
});

//UPDATE
router.put("/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));

  if (found) {
    const upMember = req.body;
    members.forEach((item) => {
      if (item.id === parseInt(req.params.id)) {
        item.name = upMember.name ? upMember.name : item.name;
        item.email = upMember.email ? upMember.email : item.email;
        res.json({ msg: "Updated", item });
      }
    });
  } else {
    res.status(400).json({ msg: "Member not found" });
  }
});

// DELETE
router.delete("/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));

  if (found) {
    res.json(members.filter((item) => item.id !== parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: "Member not found" });
  }
});
module.exports = router;
