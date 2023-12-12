type ConnectionConfig = {
    /**
     * In Database Setting window,type the name of
     * connecting DB,"TutorialDB",in [Name]area.
     */
    name: string;
    /**
     * Type the name of DB connection,"TutorialDB"in [Alias]area.
     * The name will be used in the Editor and it is ok to use
     * the same name as DB name.
     */
    alias: string;
    /**
     * Select "Y"for Active Flag for configuring whether DB is used or not
     */
    active: 'Y' | 'N';
    /**
     * IP address and port number of location the database is installed to
     * [Host Name]and [Port No]respectively.
     */
    hostName: string;
    portNo: string;
    /**
     * Select Type of DB and type service name in [Service Name]
     */
    Type: string;
    service: string;
    userName: string;
    password: string;
};
export interface IDB {
    connect(config: ConnectionConfig): any;
}
export {};
