const mongoose = require('mongoose');

const db = 'mongodb+srv://form:form1234@multi-form.hsssd.mongodb.net/form?retryWrites=true&w=majority'

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});