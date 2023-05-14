#include <iostream>
// #include <iomanip>
#include <string>
#include <cctype>
#include <string>
#include <algorithm>

using namespace std;

//-----Global Variables --------

string academic[] = {
    "overwhelm",
    "procrastination",
    "burnout",
    "pressure",
    "frustration",
    "difficulty",
    "struggle",
    "perfectionism",
    "failure",
    "performance",
    "time-management",
    "study-skills",
    "lack-of-motivation",
    "academic-expectations",
    "test-anxiety",
    "poor-grades",
    "learning-difficulties",
    "academic-pressure",
    "bullying",
    "school",
    "teachers"
};

string workplace[] = {
    "overwork",
    "workload",
    "conflict",
    "micromanagement",
    "toxic-environment",
    "discrimination",
    "harassment",
    "uncertainty",
    "job-insecurity",
    "work-life-imbalance",
    "exhaustion",
    "mental-health-issues",
    "communication-breakdown",
    "lack-of-recognition",
    "organisational-change",
    "office"
};

string relationship[] = {
    "conflict",
    "miscommunication",
    "trust-issues",
    "betrayal",
    "resentment",
    "emotional-distance",
    "incompatibility",
    "disagreements",
    "lack-of-intimacy",
    "infidelity",
    "jealousy",
    "controlling",
    "insecure",
    "power-struggles",
    "emotional-neglect",
    "disconnection",
    "uncertainty-about-the-future",
    "financial-stress",
    "romantic",
    "intimacy",
    "boyfriend",
    "girlfriend",
    "significant-other",
    "family",
    "friend"
};

string abuse[] = {
    "blood",
    "wound",
    "hurt",
    "beat",
    "forcefully",
    "helpless",
    "powerless",
    "assault",
    "domestic-violence",
    "control",
    "angry",
    "stalk",
    "violate",
    "harass",
    "sexual-abuse",
    "emotional-abuse",
    "manipulate"
};

// 3 items per array for each catergoy.. these are just fillers for example purposes
string academicLinks[] = {
    "link 1",
    "link 2",
    "link 3"
};

string workplaceLinks[] = {
    "link 1",
    "link 2",
    "link 3"
};

string relationshipLinks[] = {
    "link 1",
    "link 2",
    "link 3"
};

string abuseLinks[] = {
    "link 1",
    "link 2",
    "link 3"
};



//------------------------------


//----- CLASS DEFINITIONS -------
class User{
    public:
    string gender, location;
    int age;
    // string concerns[10];
    string categories[6];

    // default constructor
    User(){
        gender = "N/A";
        location = "N/A";
        age = 0;
        // concerns[0] = "";
        categories[0] = "";
    }

    // constructor with data
    User(string _gender, string _location, int _age, string _categories[]){
        gender = _gender;
        location = _location;
        age = _age;

        for (int i = 0; i < 6; i ++) {
            categories[i] = _categories[i];
        }
    }

};

// class Consultant{
//     public:
//     string categories[];

//     Consultant(){
//         categories[0] = "";
//     }

//     // Set up consultant with categories
//     Consultant(string _categories[]){
//         for(int i = 0; i < sizeof(_categories); i++){
//             categories[i] = _categories[i];
//         }
//     }

// };

// class Category{
//     public:
//     string name;
//     string links[5];

//     // No link with only category name setup
//     Category(string _name){
//         name = _name;
//         links[0] = "";
//     }

//     // For one link
//     Category(string _name, string _link){
//         name = _name;
//         addLink(_link);
//     }

//     // For array of links
//     Category(string _name, string _links[]){
//         name = _name;
//         for(int i = 0; i < 5; i++){
//             links[i] = _links[i];
//         }
//     }

//     void addLink(string link){
//         for(int i = 0; i < 5; i++){
//             if(links[i]!= ""){
//                 links[i] = link;
//             }
//         }
//     }
// };

//-------------------------------


//----- FUNCTION DEFINITIONS-----

// void categoryParse(string _response, string _concerns){
//     return;
// }

bool containsWord(string str, string arr[], int size) {
    transform(str.begin(), str.end(), str.begin(), ::tolower); // convert string to lowercase
    for (int i = 0; i < size; i++) {
        if (str.find(arr[i]) != string::npos) {
            return true;
        }
    }
    return false;
}

// main screen that the app opens to
User welcomeScreen(){
    string response, gender, location;
    int age;
    // string concerns[10];
    string categories[6];
    cout << endl << "Welcome to Connected, your convenient 24/7 crisis helpline!" << endl << "What is your concern right now?" << endl;
    std::cin >> response;

    // parse response for keywords from global vars

    

    
    // cout << endl << "If you feel comfortable doing so, please fill out your age, gender, and location." << endl << "*If you do not feel comfortable doing so, please fill out a 0 for each category" << endl;
    // cout << "Age: ";
    // cin >> age;
    // cout << endl << "Gender: ";
    // cin >> gender;
    // cout << endl << "Location: ";
    // cin >> location;

    if(containsWord(response, academic, sizeof(academic)/sizeof(string))){
        categories[0] = "academic";
    }

    if(containsWord(response, workplace, sizeof(workplace)/sizeof(string))){
        categories[1] = "workplace";
    }

    if(containsWord(response, relationship, sizeof(relationship)/sizeof(string))){
        categories[2] = "relationship";
    }

    if(containsWord(response, abuse, sizeof(abuse)/sizeof(string))){
        categories[3] = "abuse";
    }

    if(categories[0] != "academic" && categories[1] != "workplace" && categories[2] != "relationship" && categories[3] != "abuse"){
        categories[4] = "general";
    } else categories[4] = "none";

    return User(gender, location, age, categories);
}

// resources: returns true if client chooses a consultant
bool resourceScreen(User u1){
    bool consult = false;
    string res;
    if(u1.categories[4] == "general"){
        cout << "No resources were found in our database for your specific concern." << endl;
    }else{
        if(u1.categories[0] == "academic"){
        cout << "Here are some resources for your academic concerns: " << endl;
        for(int i = 0; i < 3; i++){
            cout << academicLinks[i] << endl;
        }
        }
        if(u1.categories[1] == "workplace"){
            cout << "Here are some resources for your workplace concerns: " << endl;
            for(int i = 0; i < 3; i++){
                cout << workplaceLinks[i] << endl;
            }
        }
        if(u1.categories[2] == "relationship"){
            cout << "Here are some resources for your relationship concerns: " << endl;
            for(int i = 0; i < 3; i++){
                cout << relationshipLinks[i] << endl;
            }
        }
        if(u1.categories[3] == "abuse"){
            cout << "Here are some resources for your abuse concerns: " << endl;
            for(int i = 0; i < 3; i++){
                cout << abuseLinks[i] << endl;
            }
        }    
    }


    cout << "Would you like to be connected directly with a consultant?" << endl;
    std::cin >> res;
    if(res == "yes" || res == "Yes" || res == "YES" || res == "y" || res == "Y"){
        consult = true;
    }
    return consult;
}

// scale of 1-5 on how bad the concern is
int crisisScale(){
    return 0;
}

// returns true once client hits "end" button
bool chatScreen(){
    return false;
}

// returns true if client chooses "yes"
bool issueResolve(){
    return false;
}

void endingScreen(){
    return;
}

//-------------------------------

// MAIN FUNCTION
int main(){
    // calls welcome screen and inputs info to the new user object
    User user1 = welcomeScreen();
    bool continues = resourceScreen(user1);
    if (continues == true){
        cout << "Connecting..." << endl;
    } else {
        cout << "Thank you for using Connected!" << endl;
    }

}