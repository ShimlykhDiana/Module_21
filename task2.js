const jsonString = `{
    "list": [
    {
    "name":"Anton",
    "age":36,
    "skills":["Javascript","HTML","CSS"], "salary":80000
        }
      ]
        }`;
     const data = JSON.parse(jsonString);
    const resObj = {
        list: [
            {
     name: data.list[0].name,
     age: Number(data.list[0].age),
     skills: data.list[0].skills,
     salary: Number(data.list[0].salary),
            },
          ]
    };
    console.log(resObj); 
    