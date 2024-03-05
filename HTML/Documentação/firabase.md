Somente Usuários autenticados podem ler ou modificar:

service cloud.firestore {
match /databases/{database}/documents {
match /{document=\*\*} {
allow read, write: if request.auth != null;
}
}
}

​Somente os donos do conteúdo podem ler ou modificar:

service cloud.firestore {
match /databases/{database}/documents {
// Allow only authenticated content owners access
match /some_collection/{userId}/{documents=\*\*} {
allow read, write: if request.auth != null && request.auth.uid == userId
}
}
}

Todos podem ler mas apenas os donos do conteúdo podem modificar:

service cloud.firestore {
match /databases/{database}/documents {
// Allow public read access, but only content owners can write
match /some_collection/{document} {
allow read: if true
allow create: if request.auth.uid == request.resource.data.author_uid;
allow update, delete: if request.auth.uid == resource.data.author_uid;
}
}
}

Permissão baseada no papel do usuário:

service cloud.firestore {
match /databases/{database}/documents {
// For attribute-based access control, Check a boolean `admin` attribute
allow write: if get(/databases/$(database)/documents/users/$(request.auth.uid)).data.admin == true;
allow read: true;

    // Alterntatively, for role-based access, assign specific roles to users
    match /some_collection/{document} {
     allow read: if get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == "Reader"
     allow write: if get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == "Writer"

}
}
}
