import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    headerButton: {
        height: 44,
        width: 44,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    remindersContainer: {
        flex: 1,
        backgroundColor: '#f5f5f5'
    },
    remindersContent : {
        flex: 1,
        paddingTop: 60
    },
    remindersHeader: {
        marginTop: 0
    },
    remindersHeaderText: {
        textAlign: 'center',
        fontSize: 24,
        color: 'purple',
        fontWeight: '500'
    },
    remindersInputContainer: {
        marginLeft: 20,
        marginRight: 20,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: '#000000',
        shadowOffset: { width: 2, height: 2 }
    },
    remindersInput: {
        height: 60,
        backgroundColor: '#ffffff',
        paddingLeft: 10,
        paddingRight: 10
    },
    remindersButtonContainer: {
        alignItems: 'flex-end'
    },
    remindersButton: {
        height: 50,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'white',
        width: 200,
        marginRight: 20,
        marginTop: 15,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    remindersSubmit: {
        color: '#666666',
        fontWeight: '600'
    },
    remindersTodoContainer: {
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: '#ededed',
        paddingLeft: 14,
        paddingTop: 7,
        paddingBottom: 7,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2 },
        flexDirection: 'row',
        alignItems: 'center'
    },
    remindersTodoText: {
        fontSize: 17
    },
    remindersTodoButton: {
        alignSelf: 'flex-end',
        padding: 7,
        borderColor: '#ededed',
        borderWidth: 1,
        borderRadius: 4,
        marginRight: 5
    },
    remindersText: {
        color: '#666666'
    },
    remindersComplete: {
        color: 'green',
        fontWeight: 'bold'
    },
    remindersDeleteButton: {
        color: 'rgba(175, 47, 47, 1)'
    },
    remindersButtons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    remindersTabBarContainer: {
        height: 70,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#dddddd'
    },
    remindersItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    remindersBorder: {
        borderLeftWidth: 1,
        borderLeftColor: '#dddddd'
    },
    remindersItemText: {
        color: '#777777',
        fontSize: 16
    },
    remindersSelected: {
        backgroundColor: '#ffffff'
    },
    remindersBold: {
        fontWeight: 'bold'
    }
});