const madge = require('madge');
const { program } = require('commander');
const fs = require('fs');

console.log("attempting to map dependencies - if you're in SM this may take a while..");

madge('../staff-app/src/Finance/_GeneralLedger/GeneralJournalEntry/Components/SelectGeneralJournalPosting/SelectGeneralJournalPosting.js')
  .then((res) => res.image('./images/SelectGeneralJournalPosting.pdf'))
  .then((writtenImagePath) => {
    console.log('Image written to ' + writtenImagePath);
   });

