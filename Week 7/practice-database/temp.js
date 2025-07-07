const z = require('zod/v4');
const result = z.object({
            email : z.email(),
            password : z.string().min(8).max(25),
            name : z.string().min(2).max(25)
        });
    
        const validatedInput = result.safeParse({ email : "sujal@gmail.com", password : "asldkjfasldfidlis", name : 98});
    
        console.log(validatedInput);