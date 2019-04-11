import { TextParser } from './TextParser'

class Program {
    public static Main(): void {
        let parser = new TextParser(true);

        parser.ParseText("Dear {user.name}! Welcome to the {location.name}. Our contact is: {company.email}");
        // parser.ParseText("Dear {user.name! Welcome to the Matrix. Our contact is: {company.email}");
        // parser.ParseText("Dear user.name}! Welcome to the Matrix. Our contact is: {company.email}");
        // parser.ParseText("{user.email}Dear! Welcome to the Matrix. Our contact is: {company.email}");
        // parser.ParseText("{user.email{system.name}}");
    }
}

Program.Main();