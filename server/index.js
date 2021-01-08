const { ApolloServer, gql } = require("apollo-server");

let students = [
    {
        id: 1,
        name: "Hassan Mujtaba",
        age: 21,
        email: "hassan@gmail.com"
    },
    {
        id: 2,
        name: "Sohaima Hassan",
        age: 18,
        email: "sohaima@gmail.com"
    },
    {
        id: 3,
        name: "Aisha Kamran Ali",
        age: 7,
        email: "aisha@gmail.com"
    },
    {
        id: 4,
        name: "Zaneera Kamran Ali",
        age: 20,
        email: "zaneera@gmail.com"
    },
]

const resolvers = {
    Query: {
        students: () => students
    },
    Mutation: {
        addStudent: (_, { input }) => {
            console.log(input);
            students.push({
                id: input.id,
                name: input.name,
                age: input.age,
                email: input.email
            })
            return {
                id: input.id,
                name: input.name,
                age: input.age,
                email: input.email
            }
        }
    }
}

const typeDefs = gql`
    type Students {
        id: Int
        name: String
        age: Int
        email: String
    }
    
    input StdInput {
        id: Int
        name: String
        age: Int
        email: String
    }

    type Query {
        students: [Students]
    }
    type Mutation {
        addStudent(input: StdInput): String
    }
`

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
    console.log(`server running at =====> ${url}`);
})

