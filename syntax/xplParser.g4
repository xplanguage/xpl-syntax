parser grammar xplParser;

options {
	tokenVocab = xplLexer;
}

parse: hashBangs? (patchDef | formulaic)* EOF;

hashBangs: hashBang hashBang*;
hashBang: HashBang;

patchDef: match Assign (
	  (ParenOpen batch ParenClose) (CurlyOpen hatch CurlyClose)
	  | (ParenOpen batch ParenClose)
	  | (CurlyOpen hatch CurlyClose)
);

match: label | formulaic | formulaCall | pattern | path;
pattern: patternEasy | patternHard | patternOpen;

path: Path;

batch: Label;

hatch: formulaic+;

formulaic: formulaCall | field | number | string;

formulaCall: field ParenOpen formulaCallItem* ParenClose piped?;
formulaCallItem: (label Assign)? formulaic;
field: (label Dot)? label;
piped: Pipe formulaic;

number: decimalInteger | decimal | hexInteger | octalInteger;
decimalInteger: DecimalInteger;
decimal: Decimal;
hexInteger: HexInteger;
octalInteger: OctalInteger;

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
