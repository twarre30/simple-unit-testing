var mentors = [
    {
        name: 'Irina',
        title: 'Dr.',
        yearsOfExperience: 10
    }, {
        name: 'Ashleigh',
        title: 'Dame',
        yearsOfExperience: 20
    }, {
        name: 'Etza',
        title: 'Professor',
        yearsOfExperience: 30
    }
];

function getMentorInfo(mentors, name) {
    var result;
    var greeting = 'Hello ';

    result = mentors.find(function (person) {
        return person.name === name;
    });

    var mentorTitle = 'Junior Developer';

    if (result.yearsOfExp > 10) {
        mentorTitle = 'Senior Developer';
    } else if (result.yearsOfExp > 20) {
        mentorTitle = 'Very Senior Developer';
    }

    result.jobTitle = mentorTitle;
    result.fullName = result.title + ' ' + result.name;

    return result;
}

var result = getMentorInfo(mentors, 'Etza')

module.exports = getMentorInfo
