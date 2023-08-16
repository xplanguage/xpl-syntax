lexer grammar xplLexer;

channels {
	COMMENTS,
	ANNOTATIONS
}

HashBang: '#!' ~[\r\n\p{Zl}]*;

BraceOpen: '<';
BraceClose: '>';

ParenOpen: '(';
ParenClose: ')';

TableOpen: '[';
TableClose: ']';

FormulaChar: [-~!@#$%^&_+*=<>?/]+ ParenOpen;

Null: '@@';

Star: '*';

Bang: '!';

Assign: ':';

Pipe: '|';

Dot: '.';

ParentCall: '\\';

TypeTable: '#';
TypeBool: '&';
TypeString: '$';
TypeCustom: '@';

HexInteger: '-'? '0' [xX] HexDigit (HexDigit | '_')*;

OctalInteger: '-'? '0' OctalDigit (OctalDigit | '_')*;

DecimalInteger:
    '0'
    | [1-9] (DecimalDigit | '_')*
    | DecimalDigit+ ExponentPart;
Decimal:
    '-'? DecimalInteger (
        Dot DecimalDigit* ExponentPart?
        | DecimalDigit+ ExponentPart?
        | DecimalInteger ExponentPart?
    )?;

Label: [\p{L}_-] [\p{L}\p{N}_-]*;

fragment DecimalDigit: [0-9];
fragment HexDigit: [0-9a-fA-F];
fragment OctalDigit: [0-7];
fragment ExponentPart: [eE] [+-]? DecimalDigit+;

Ws: [\p{White_Space}] -> skip;
Comment: '#*' .*? '*#' -> channel(COMMENTS);
CommentLine: '# ' ~[\r\n\p{Zl}]+ -> channel(COMMENTS);
Annotation: '#: ' ~[\r\n\p{Zl}]+ -> channel(ANNOTATIONS);

CurlyOpen: '{' -> pushMode(DEFAULT_MODE);
CurlyClose: '}' -> popMode;

P_Open: '/' -> pushMode(PATH);
PE_Open: '\'' -> pushMode(PATTERN_EASY);
PH_Open: '"' -> pushMode(PATTERN_HARD);
PO_Open: '^' -> pushMode(PATTERN_OPEN);

StringOpen: '`' -> pushMode(STRING);

mode PATH;
P_Part: P_Literal+;
P_Dig: '//';
P_Dir: '/';
P_Esc: '\\:';
P_FieldEsc: '\\{';
P_FieldOpen: '{' -> pushMode(DEFAULT_MODE);
P_Literal: P_Esc | P_FieldEsc | ~[/:{];
P_Close: ':' -> popMode;

mode PATTERN_EASY;
PE_Part: PE_Literal+;
PE_Esc: '\\\'';
PE_FieldEsc: '\\{';
PE_FieldOpen: '{' -> pushMode(DEFAULT_MODE);
PE_Literal: PE_Esc | PE_FieldEsc | ~['{];
PE_Close: '\'' -> popMode;

mode PATTERN_HARD;
PH_Part: PH_Literal+;
PH_Esc: '\\"';
PH_FieldEsc: '\\{';
PH_FieldOpen: '{' -> pushMode(DEFAULT_MODE);
PH_Literal: PH_Esc | PH_FieldEsc | ~["{];
PH_Close: '"' -> popMode;

mode PATTERN_OPEN;
PO_Part: PO_Literal+;
PO_Esc: '\\^';
PO_FieldEsc: '\\{';
PO_FieldOpen: '{' -> pushMode(DEFAULT_MODE);
PO_Literal: PO_Esc | PO_FieldEsc | ~[^{];
PO_Close: '^' -> popMode;

mode STRING;
S_StringPart: S_StringLiteral+;
S_StringEsc: '\\`';
S_StringFieldEsc: '\\{';
S_StringFieldOpen: '{' -> pushMode(DEFAULT_MODE);
S_StringLiteral: S_StringEsc | S_StringFieldEsc | ~[`{];
S_StringClose: '`' -> popMode;
