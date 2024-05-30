import express from "express";
import bodyParser from "body-parser";
import unified from "unified";
import remarkGFM from "remark-gfm";
import remarkParse from 'remark-parse';
import remarkSubSuper from 'remark-sub-super';
import remarkHeadingId from 'remark-heading-autoid';

const app = express();
app.use(bodyParser.json());
import cors from "cors";
app.use(cors({
	origin: 'http://localhost:4545'
}));

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.post("/", (req, res) => {
	const AST = unified()
		.use(remarkParse)
		.use(remarkHeadingId)
		.use(remarkSubSuper)
		.use(remarkGFM)
		.parse(req.body.code);
	res.send(JSON.stringify(AST));
});

export default app;
