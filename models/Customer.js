const customerSchema = new mongoose.Schema({
              
        ID : {
            type : Number,
            required : True,
            unique : True,
        },

        age :  {
            type : Number,
            default : 18
        },

        gender :  {
            type : String,
            enum : ['Male', 'Female']
        },

        income :  {
            type : Number,
            enum : ['low', 'middle', 'high']
        }
});

const Customer = mongoose.model('CustomerID', customerSchema);
module.exports = Customer