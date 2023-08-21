parser grammar xplParser;

options {
	tokenVocab = xplLexer;
}

parse: hashBangs? (patchDef | formulaic)* EOF;

hashBangs: hashBang hashBang*;
hashBang: HashBang;

patchDef: match (BraceOpen patchParent BraceClose)?
(
	  (ParenOpen batch ParenClose) (CurlyOpen hatch CurlyClose)
	  | (ParenOpen batch ParenClose)
	  | (CurlyOpen hatch CurlyClose)
);
patchParent: field | typeNative;

match: (((label | field | number | string | formulaCall | pattern | null ) Assign) | path) Assign;
pattern: patternEasy | patternHard | patternOpen;

batch: batchItem+;
batchItem: type? protect? priv? batchLabel mutable? nullable? unique? (Assign (formulaic | formulaDef | table | null))?;
protect: Bang;
priv: Bang;
mutable: Bang;
nullable: Bang;
unique: Star;
batchLabel: Label;
null: Null;

formulaDef: (ParenOpen batch ParenClose)? CurlyOpen formulaicPiped CurlyClose;

type: typeTable | typeBool | typeString | typeCustom;
typeNative: typeTable | typeBool | typeString;
typeTable: TypeTable;
typeBool: TypeBool;
typeString: TypeString;
typeCustom: TypeCustom typeLabel;
typeLabel: Label;

hatch: formulaicPiped+;

formulaicPiped: alias? formulaic piped?;
alias: Label Assign;
formulaic: (parentCall? formulaCall) | (parentCall? field) | number | string | table;
parentCall: ParentCall;

formulaCall: formulaLabel exceptional? formulaCallItem* ParenClose;
formulaLabel: (field ParenOpen | FormulaChar+);
formulaCallItem: (label Assign)? formulaic;
field: (module Dot)? label;
module: Label;
piped: Pipe alias? formulaicPiped;

exceptional: match (CurlyOpen formulaic CurlyClose)?;

table: (ParenOpen batch ParenClose)? (TableOpen formulaic* TableClose)+;

number: decimalInteger | decimal | hexInteger | octalInteger;
decimalInteger: DecimalInteger;
decimal: Decimal;
hexInteger: HexInteger;
octalInteger: OctalInteger;

path: P_Open (pathPart | pathDirect| pathDig | pathField)* P_Close;
pathPart: P_Part+;
pathDirect: P_Dir;
pathDig: P_Dig;
pathField: P_FieldOpen formulaic? CurlyClose;

patternEasy: PE_Open (patternEasyPart | patternEasyField)* PE_Close;
patternEasyPart: PE_Part+;
patternEasyField: PE_FieldOpen formulaic? CurlyClose;

patternHard: PH_Open (patternHardPart | patternHardField)* PH_Close;
patternHardPart: PH_Part+;
patternHardField: PH_FieldOpen formulaic? CurlyClose;

patternOpen: PO_Open (patternOpenPart | patternOpenField)* PO_Close;
patternOpenPart: PO_Part+;
patternOpenField: PO_FieldOpen formulaic? CurlyClose;

string: StringOpen (stringPart | stringField)* S_StringClose;
stringPart: S_StringPart+;
stringField: S_StringFieldOpen formulaic? CurlyClose;

label: Label;
